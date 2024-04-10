import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {invoke} from '@tauri-apps/api/tauri';
import ImageCard from './ImageCard';

const SearchItemsList = () => {
    const location = useLocation();
    const { searchTerm } = location.state || {};
    const [links, setLinks] = useState([]);
    useEffect(() => {
        get_links()
    }, [location])

    let get_links = async () =>  {
        let data = await invoke('searching', {name: searchTerm});
        setLinks(data);
        console.log("SearchItemList CALL");
        console.log(links);
    }

  return (
    <div>
        <div className='flex flex-wrap justify-center overflow-x-auto z-0'>
            {links.map((link, index) => (
                <ImageCard key={index} src={link}/>
            ))}
        </div>
    </div>
  )
}

export default SearchItemsList
