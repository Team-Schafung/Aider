import { Link } from "raviger";
import { useState, useEffect } from "react";

export default function CustomVibrations() {
    const [recognizedText, setRecognizedText] = useState("");

    const [targetName, setTargetName] = useState("Pragati");
    

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;

    recognition.onresult = function(event) {
        const resultIndex = event.resultIndex;
        const transcript = event.results[resultIndex][0].transcript;
        setRecognizedText(transcript);
    };

    const startRecognition = () => {
        recognition.start();
    };

    useEffect(() => {
        if (recognizedText.toLowerCase() === targetName.toLowerCase()) {
            console.log("here 1")
            navigator.vibrate(200);
        }
    }, [recognizedText]);

    return (
        <div>
            <div>
                <div className="mt-32 flex justify-center items-center w-full">
                    <div className="flex justify-center items-center">
                        <div className="">
                            <p style={{textAlign: 'center'}}>Enter target name</p>
                            <input 
                                type="text"
                                style={{
                                    borderWidth: 3,
                                    borderColor: "black",
                                    marginTop: 10,
                                    marginBottom: 5,
                                    textAlign: 'center',
                                    borderRadius: 5, 
                                    padding: 10,
                                    height: 50
                                }}
                                className=""
                                value={targetName}
                                onChange={(e)=>setTargetName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button 
                        onClick={startRecognition}
                        style={{
                            backgroundColor: '#000',
                            color: 'white',
                            marginTop: 10,
                            marginBottom: 5,
                            textAlign: 'center',
                            borderRadius: 5, 
                            padding: 10
                        }} className="w-2/3"
                    >Start Recognition
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <p style={{
                        borderWidth: 3,
                        borderColor: "black",
                        marginTop: 10,
                        marginBottom: 5,
                        textAlign: 'center',
                        borderRadius: 5, 
                        padding: 10,
                        height: 200
                    }} className="w-2/3" href="/audio">
                        {recognizedText}
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link style={{
                    backgroundColor: '#000',
                    color: 'white',
                    marginTop: 10,
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 5, 
                    padding: 10
                }} className="w-2/3" href="/audio">
                    Audio
                </Link>
            </div>
        </div>
    );
}


