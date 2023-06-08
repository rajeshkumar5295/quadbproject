import React from 'react';
import { Link } from 'react-router-dom';

import Maincontent from './Maincontent';

const Header = () => {
  return (
    <div>
           <div className=' sticky top-0 z-10 header text-2xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500  flex-col md:flex-row mb-5  '>

         <Link to="/"><span> TV <span className='text-slate-500 md:mb-5 '>Shows</span></span></Link>
    


     <div>
           <ul className='flex flex-col md:flex-row mt-3 md:mt-0 '>
           <Link to="/movies"> <li className='ml-5 font-medium  text-center  rounded-md px-2  bg-gradient-to-r from-green-400 to-blue-500     hover:from-pink-500 hover:to-yellow-500 text-stone-700    mb-3 md:mt-0  '>Movies</li></Link>

            <Link to="/webseries" > <li className='ml-5 font-medium text-center  rounded-md px-2   bg-gradient-to-r from-green-400 to-blue-500     hover:from-pink-500 hover:to-yellow-500 text-stone-700  mb-3 md:mt-0  '>Web Series</li></Link>

            <Link to="/login" > <li className='ml-5 text-center font-medium  rounded-md px-2  bg-gradient-to-r from-green-400 to-blue-500     hover:from-pink-500 hover:to-yellow-500 text-stone-700 mb-3 md:mt-0 '>Login Here</li></Link>
           </ul>
   </div>
          </div>

      {/* <Maincontent/> */}
    </div>
  )
}

export default Header