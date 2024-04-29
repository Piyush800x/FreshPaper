import React, {useState, useEffect} from 'react'
import {invoke} from '@tauri-apps/api/tauri';

const HomeHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [staticURL, setStaticUrl] = useState('')

  useEffect(() => {
    const lastGeneratedTime = localStorage.getItem('lastGeneratedTime');


    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Request completed
        const redirectedUrl = xhr.responseURL; // Get the final URL after redirects
        console.log('Redirected URL:', redirectedUrl);
        if (staticURL == '')  {
          setStaticUrl(redirectedUrl);
          localStorage.setItem('img_url', redirectedUrl)
        }
      }
    };

    if (!lastGeneratedTime || 
      (lastGeneratedTime && Date.now() - parseInt(lastGeneratedTime) >= 24 * 60 * 60 * 1000) )  {
        if (localStorage.getItem('img_url') == null || localStorage.getItem('img_url') == undefined)  {
          xhr.open('GET', 'https://source.unsplash.com/random/1920x1080', true);
          xhr.send();
          localStorage.setItem('lastGeneratedTime', Date.now());
        }
        else {
          setStaticUrl(localStorage.getItem('img_url'));
        }
      }
      else  {
        console.log(`lastTime: ${lastGeneratedTime }`)
        console.log(`calc: ${Date.now() - parseInt(lastGeneratedTime) >= 24 * 60 * 60 * 1000}`)
        setStaticUrl(localStorage.getItem('img_url'));
      }
    
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
    <div className='flex flex-col justify-center items-center font-opensans'>
      {/* FreshPaper */}
        <div className={`transition-all ease-in-out delay-50 bg-cover bg-center bg-home_bg w-5/6 hover:w-screen h-48  justify-center items-center rounded-2xl`} >
            <h1 className="text-black font-opensans text-6xl tracking-tight px-10 pt-12">
                FreshPaper
            </h1>
            <span className='font-normal pt-2'>An auto wallpaper changer app</span>
        </div>
        <span className='opacity-10'>--------------------------------------------------------------------------------------------------------------------------</span>
        {/* Wallpaper of the day */}
        <div>
          <h1 className='font-opensans font-medium text-4xl'>Wallpaper of the Day</h1>
        </div>
        {/* Random Image */}
        <div className='flex flex-row justify-start '>
            <div className='backdrop-filter p-2'>
                <div className='bg-opacity-80 backdrop-blur-lg'>
                    <div className='bg-purple-300 bg-opacity-20 rounded-2xl p-8'>
                        <div className="object-contain max-h-md max-w-md flex flex-col items-center p-2">
                        <img
                            src={staticURL}
                            alt="lol"
                            className={`max-w-full  h-auto mb-4 transition-opacity rounded-2xl duration-500 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ opacity: isVisible ? 1 : 0}}
                        />
                        <button onClick={() => downloadImage(staticURL)} 
                        className="text-lg font-medium transition ease-in-out delay-50 bg-purple-500 hover:bg-purple-700 hover:drop-shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 hover:scale-110 text-white py-2 px-4 rounded-xl w-36 h-12">Download
                        </button>
                        </div>
                    </div>
                </div>
            </div>
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
  )
}

export default HomeHero
