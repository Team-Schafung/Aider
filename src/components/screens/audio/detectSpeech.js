import { Link } from "raviger";
import { useState } from "react";

export default function DetectSpeech() {

    const [recognizedText, setRecognizedText] = useState("");

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript;
    setRecognizedText(transcript);
    };


    const startRecognition = () => {
        recognition.start();
    };
      

    return (
        <div>
            <div>
                <div className="flex justify-center items-center mt-48">
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
                    >Start Recognition</button>
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


