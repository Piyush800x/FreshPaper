import React, { useState, useEffect } from 'react';
import {invoke} from '@tauri-apps/api/tauri';


const ImageCard = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const downloadImage = async (src) => {
    let data = await invoke('save_image', {url: src});       // just test
        if (data == true)   {
            console.log("Download success")
            setIsDownloaded(true);
        }
        else    {
            console.log("Download Failed")
        }
  };

  return (
    <div className='font-ubuntu backdrop-filter p-2'>
        <div className='bg-opacity-80 backdrop-blur-lg'>
            <div className='bg-white bg-opacity-20 rounded-lg p-8'>
                <div className="object-contain max-h-md max-w-md flex flex-col items-center p-2">
                  <img
                      src={src}
                      alt="lol"
                      className={`max-w-full  h-auto mb-4 transition-opacity duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ opacity: isVisible ? 1 : 0}}
                  />
                  <button onClick={() => downloadImage(src)} 
                  className="transition ease-in-out delay-50 bg-blue-500 hover:bg-blue-700 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded">Download
                  </button>
                  {isDownloaded && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className=" bg-white rounded-lg shadow-lg p-6 justify-center items-center">
                        <p className="text-lg font-bold mb-4">Download Complete!</p>
                        <button
                          onClick={() => setIsDownloaded(false)}
                          className="transition ease-in-out delay-50 bg-purple-500 hover:bg-purple-700 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded justify-center items-center"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default ImageCard;