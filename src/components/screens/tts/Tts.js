import VoiceSelector from "./VoiceSelector";

import { useRef, useEffect, useState, useCallback } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd"

import { drawRect } from "./helpers/utils";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const synth = window.speechSynthesis;

export default function Tts() {

  let od="";
  let pod="";

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    const net = await cocossd.load()
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    console.log("here")
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);

      if(obj[0]) {

        od = obj[0].class;

        if(od!=pod) {
          const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(od);
          utterance.voice = synth.getVoices()[1];
          synth.speak(utterance);
          pod = od;
        }
      }
      
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx)
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  if (!synth)
    return <span>Aw... your browser does not support Speech Synthesis</span>;
 
  return (
    <>
      <div className="min-h-full">
        <main className="mt-32">
          <div className="max-w-5xl mx-auto pb-12 px-4 sm:px-4 lg:px-4">
            {/* Replace with your content */}
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 screen">
              <Webcam
              className="video"
                ref={webcamRef}
                muted={true}
                style={{
                  position: "relative",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  zindex: 1,
                  width: "100%",
                }}
              />

              <canvas
              className="canvas"
                ref={canvasRef}
                style={{
                  position: "relative",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  zindex: 2,
                  width: "100%",
                  clear: "both",
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </>
    
  );
};