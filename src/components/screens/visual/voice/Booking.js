import { Link } from "raviger";
import React, { useState, useEffect } from "react";

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

export default function Booking() {
    const [message, setMessage] = useState("");
    const [hotels, setHotels] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [numPeople, setNumPeople] = useState(0);
    const [stayDate, setStayDate] = useState(null);
    const [stayTime, setStayTime] = useState(null);
    const [stayDuration, setStayDuration] = useState(0);
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    useEffect(() => {
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          console.log(transcript);
          setMessage(transcript);
    
          handleBooking(transcript);
        };
    }, []);

    const handleBooking = (transcript) => {
        if (transcript.includes("Need hotels in")) {
          const location = transcript.split("Need hotels in ")[1];
          setHotels([
            { name: "dummy hotel 1", stars: 4, location },
            { name: "dummy hotel 2", stars: 5, location },
          ]);
          setMessage(`Options for hotels in ${location} are ${hotels.map((hotel) => hotel.name).join(", ")}`);
        } else if (transcript.includes("hotels should have more than 4 stars")) {
          const filteredHotels = hotels.filter((hotel) => hotel.stars > 4);
          setHotels(filteredHotels);
          setMessage(`Here is an updated list of hotels in ${hotels[0].location}: ${filteredHotels.map((hotel) => hotel.name).join(", ")}`);
        } else if (transcript.includes("Book")) {
          const hotelName = transcript.split("Book ")[1];
          const selectedHotel = hotels.find((hotel) => hotel.name === hotelName);
          setSelectedHotel(selectedHotel);
          setMessage(`I will proceed to selecting ${selectedHotel}. Please provide the following details - how many people are going to stay?`);
        } else if (transcript.match(/^\d+$/)) {
          if (!numPeople) {
            setNumPeople(parseInt(transcript));
            setMessage(`Okay I will book for ${transcript} people. When is the stay?`);
          } else {
            setStayDuration(parseInt(transcript));
            setMessage(`Okay, leaving date set to ${stayDate}, 12 pm. Do I make any changes to the details you provided?`);
          }
        } else if (transcript.match(/(\d+)(th|rd|nd) (january|february|march|april|may|june|july|august|september|october|november|december)/i)) {
          setStayDate(transcript);
          setMessage(`Okay I will book for ${stayDate}, 2023. What time will you ${numPeople} be reaching?`);
        } else if (transcript.match(/(\d{1,2}):(\d{1,2}) (am|pm)/i)) {
          setStayTime(transcript);
          setMessage(`Okay I will check reservation for ${stayTime}. Do you want a single room for the 3 of you?`);
        } else if (transcript.match(/(\d{1,2}):(\d{1,2}) (am|pm)/i)) {
            setStayTime(transcript);
            setMessage(`Okay I will check reservation for ${stayTime}. Do you want a single room for the 3 of you?`);
        } else {
            setStayTime(transcript);
            setMessage(`Okay I will confirm. Single room, accommodating ${numPeople} people, from ${stayTime} on ${stayDate} at ${selectedHotel}?`);
        }
    }

    return (
        <div>            
            <div className="flex justify-center items-center">
                <Link style={{
                    backgroundColor: '#000',
                    color: 'white',
                    marginTop: 10,
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 5, 
                    padding: 10
                }} className="w-2/3" href="/visual">
                    Visual
                </Link>
            </div>
        </div>
    );

}