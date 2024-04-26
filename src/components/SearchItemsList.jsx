import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {invoke} from '@tauri-apps/api/tauri';
import ImageCard from './ImageCard';
import arrowBack from '../assets/arrow_back.svg'
import arrowForward from '../assets/arrow_forward.svg'

const SearchItemsList = () => {
    const location = useLocation();
    const { searchTerm } = location.state || {};
    const [links, setLinks] = useState([]);
    const [page, setPage] = useState(1)     // by changing the state it auto-reloads #YAY
    const [prevLocation, setPrevLocation] = useState(location.state || {});
    const [isLoading, setIsLoading] = useState(false); // Add a state for loading

    useEffect(() => {
        if (prevLocation !== searchTerm)    {       // Prefetly working
            setPrevLocation(searchTerm)
            setPage(1)
        }
        console.log(`------------------------`)
        console.log(`prev ${prevLocation}`)
        console.log(`now ${searchTerm}`)
        get_links()
    }, [location, page])

    let get_links = async () =>  {
        setIsLoading(true);
        let data = await invoke('searching', {name: searchTerm, page: page});       // just test
        setLinks(data);
        console.log("SearchItemList CALL");
        console.log(links);
        console.log(`Page is ${page}`)
        setIsLoading(false);
    }

    const handlePrev = async () => {
        if (page === 1) {
            setPage(1)    
        }
        else {
            setPage(page-1)
        }
        console.log(`handlePrev called page ${page}`)
    }

    const handleNext = async () => {
        setPage(page+1)
        console.log(`handleNext called page ${page}`)
    }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-wrap justify-center overflow-x-auto z-0'>
            {links.map((link, index) => (
                <ImageCard key={index} src={link} />
            ))}
        </div>
        <div class="flex flex-row justify-center items-center py-10 gap-4">
            <div className='px-2 py-2 drop-shadow-xl rounded-xl'>
                <button onClick={handlePrev} className="rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                    <img src={arrowBack} style={{width:20, height:20}} alt='Arrowback'></img>
                </button>
            </div>
            <div className='px-2 py-2 drop-shadow-xl rounded-xl'>
                <button onClick={handleNext} className="rounded-xl bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4">
                <img src={arrowForward} style={{width:20, height:20}} alt='Arrowback'></img>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchItemsList
