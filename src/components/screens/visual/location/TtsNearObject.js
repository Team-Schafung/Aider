import VoiceSelector from "../../tts/VoiceSelector";

import { useRef, useEffect, useState, useCallback } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd"

import { drawRect } from "../../tts/helpers/utils";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const synth = window.speechSynthesis;

export default function TtsNearObject({recognizedText}) {

  let od="";
  let pod="";
 
  // const recognizedTextProp = props.recognizedText

  console.log(recognizedText)

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  const videoConstraints = {
    // facingMode: { exact: isMobile ? "environment" : "user" },
    frameRate: 50,
  };
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    const net = await cocossd.load()
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
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
        console.log(recognizedText)
        console.log(od)
        if(od!=pod && recognizedText.toLowerCase() == od.toLowerCase()) {
          console.log(od)
          let content = od + " found, move forward"
          const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(content);
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
  }, [recognizedText]);

  if (!synth)
    return <span>Aw... your browser does not support Speech Synthesis</span>;
 
  return (
    <>
      <div className="min-h-full">
        <main className="mt-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-4">
            {/* Replace with your content */}
            <div className="bg-white rounded-lg shadow px-5 sm:px-6 screen">
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
                videoConstraints={videoConstraints}
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