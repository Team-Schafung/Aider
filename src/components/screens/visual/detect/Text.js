import React, {useState, useEffect} from 'react';
import Tesseract from 'tesseract.js';
import { Link } from 'raviger';

const Text = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if(text) {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  }, [text])


  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };

  return (
    <div className="" style={{ height: '100vh' }}>
        <div style={{marginTop: 25}} className='flex justify-around items-center'>
            <input
                type="file"
                onChange={(e) =>
                setImage(URL.createObjectURL(e.target.files[0]))
                }
                style={{
                    backgroundColor: '#000',
                    color: 'white',
                    marginTop: 10,
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 5, 
                    padding: 10
                }} className="w-2/3"
            />
            <input
                type="button"
                onClick={handleSubmit}
                style={{
                    borderWidth: 3,
                    borderColor: "black",
                    marginTop: 10,
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 5, 
                    padding: 10,
                }}
                className=""
                value="Convert"
            />
        </div>
              

        {isLoading && (
        <div className='flex justify-around items-center mt-10 mb-10'>
            <progress className="" value={progress} max="100">
            {progress}%{' '}
            </progress>{' '}
            <p className="">Converting:- {progress} %</p>
        </div>
        )}
          
          {!isLoading && text && (
            <div className='flex justify-around items-center mt-10 mb-10 w-full'>
              <textarea
                style={{
                    borderWidth: 2,
                    borderColor: "black",
                    padding: 50,
                    borderRadius: 5,
                }}
                className=""
                rows="18"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
          )}

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
};

export default Text;
