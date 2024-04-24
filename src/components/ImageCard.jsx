import React, { useState, useEffect } from 'react';



const ImageCard = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const downloadImage = (src) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = 'image.jpg'; // You can set a custom filename here
    link.click();
  };

  return (
    <div className='backdrop-filter p-2'>
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
                </div>
            </div>
        </div>
    </div>
  );
};

export default ImageCard;