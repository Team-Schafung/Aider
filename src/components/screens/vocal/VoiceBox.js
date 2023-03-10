import { Link } from "raviger";
import React, { useState } from 'react';

export default function VoiceBox() {
    const [text, setText] = useState('');

    function handleInputChange(event) {
        setText(event.target.value);
    }

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function handleSpeakClick() {
        speak(text);
    }


    return (
        <div>
            <div className="mt-32 flex justify-center items-center w-full">
                <div className="flex justify-center items-center">
                    <textarea style={{
                        borderWidth: 3,
                        borderColor: "black",
                        marginTop: 100,
                        marginBottom: 5,
                        textAlign: 'center',
                        borderRadius: 5, 
                        padding: 10,
                        height: 100
                    }} placeholder="Enter text you want us to speak" type="text" value={text} onChange={handleInputChange} />
                </div>
            </div>  
            <div className="flex justify-center items-center">
            <button style={{
                borderWidth: 3,
                borderColor: "black",
                marginTop: 10,
                marginBottom: 5,
                textAlign: 'center',
                borderRadius: 5, 
                padding: 10
            }} className="w-2/3" onClick={handleSpeakClick}>
                Speak
            </button>

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
                }} className="w-2/3" href="/speech">
                    Speech
                </Link>
            </div>
        </div>
    );
}


