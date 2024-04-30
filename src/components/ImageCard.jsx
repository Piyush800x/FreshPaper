import React, { useState, useEffect } from 'react';
import {invoke} from '@tauri-apps/api/tauri';


const ImageCard = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isApplied, setIsApplied] = useState(false);


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

  const handleSetWallpaper = async (src) => {
    let res = await invoke('set_wallpaper', {url: src});
    if (res == true)  {
      console.log("Wallpaper set")
      setIsApplied(true)
    }
    else  {
      console.log("Wallpaper not set")
    }
  };

  return (
    <div className='font-opensans backdrop-filter p-2'>
        <div className='bg-opacity-80 backdrop-blur-lg'>
            <div className='bg-blue-500 bg-opacity-20 rounded-2xl p-8'>
                <div className="object-contain max-h-md max-w-md flex flex-col items-center p-2">
                  <img
                      src={src}
                      alt="lol"
                      className={`rounded-xl max-w-full  h-auto mb-4 transition-opacity duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ opacity: isVisible ? 1 : 0}}
                  />
                  <div className='flex flex-row'>
                    <button onClick={() => downloadImage(src)} 
                    className="text-lg font-light transition ease-in-out delay-50 bg-blue-500 hover:bg-blue-700 hover:drop-shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 text-white py-2 px-4 rounded-3xl w-36 h-12 mt-2 mr-3">Download
                    </button>
                    <button onClick={() => handleSetWallpaper(src)} 
                    className="text-lg font-light transition ease-in-out delay-50 bg-blue-500 hover:bg-blue-700 hover:drop-shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 text-white py-2 px-4 rounded-3xl w-36 h-12 mt-2 ml-3">Apply
                    </button>
                  </div>
                  {isDownloaded && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="flex flex-col bg-purple-50 rounded-2xl shadow-lg p-6 justify-center items-center">
                        <p className="text-lg font-bold mb-4">Download Complete!</p>
                        <button
                          onClick={() => setIsDownloaded(false)}
                          className="text-lg transition ease-in-out delay-50 bg-blue-500 hover:bg-blue-700 hover:drop-shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 text-white font-light py-2 px-4 rounded-3xl justify-center items-center w-24 h-12"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                  {isApplied && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="flex flex-col bg-purple-50 rounded-2xl shadow-lg p-6 justify-center items-center">
                        <p className="text-lg font-bold mb-4 mx-10">Wallpaper Set!</p>
                        <button
                          onClick={() => setIsApplied(false)}
                          className="text-lg transition ease-in-out delay-50 bg-blue-500 hover:bg-blue-700 hover:drop-shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 text-white font-light py-2 px-4 rounded-3xl justify-center items-center w-24 h-12"
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