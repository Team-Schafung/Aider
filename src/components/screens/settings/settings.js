import React, { useState, useEffect } from 'react';
import { Link } from 'raviger';
export default function Settings() {

    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);   

    useEffect(() => {
        const synth = window.speechSynthesis;
        if (synth) {
            // Wait for the voices to be loaded
            synth.onvoiceschanged = () => {
            const voices = synth.getVoices();
            setVoices(voices);
            setSelectedVoice(voices[0]); // Set the default voice
            };
        }
    }, []);
    
    function handleChange(event) {
    setSelectedVoice(event.target.value);
    }



    return (
        // <select value={selectedVoice} onChange={handleChange}>
        //         {voices.map((voice, index) => (
        //             <option key={index} value={voice}>
        //             {voice.name} ({voice.lang})
        //             </option>
        //         ))}
        //     </select>
        <div className="flex justify-center items-center">
                <Link style={{
                    backgroundColor: '#000',
                    color: 'white',
                    marginTop: 10,
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 5, 
                    padding: 10
                }} className="w-2/3" href="/">
                    Home
                </Link>
            </div>
    );
}


