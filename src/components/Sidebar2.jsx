import React from 'react'
import HomeIcon from '../assets/home_icon.svg'
import CategoryIcon from '../assets/category_icon.svg'
import SettingsIcon from '../assets/settings_icon.svg'

const Sidebar2 = ({theme}) => {
  return (
    <div>
        <div className={`font-opensans fixed top-0 left-0 h-screen w-20 bg-${theme}-100 text-black`}>
            <div className='flex flex-col mt-20 justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 '>
                <a href='/' className='justify-center items-center text-center'>
                <img src={HomeIcon} style={{width: 50}} className={`bg-${theme}-200 rounded-lg p-2`}/>
                    <span className='text-sm'>Home</span>
                </a>
            </div>
            <div className='flex flex-col mt-2 justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110'>
                <a href='#' className='flex flex-col justify-center items-center text-center'>
                <img src={CategoryIcon} style={{width: 50}} className={`bg-${theme}-200 rounded-lg p-2`}/>
                    <span className='text-sm'>Category</span>
                </a>
            </div>
            <div className='flex flex-col mt-2 justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110'>
                <a href='#' className='flex flex-col justify-center items-center text-center'>
                <img src={SettingsIcon} style={{width: 50}} className={`bg-${theme}-200 rounded-lg p-2`}/>
                    <span className='text-sm'>Settings</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar2
