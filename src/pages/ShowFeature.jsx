import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ShowFeature = ( {product} ) => {  
        
        const navigate=useNavigate();
  // console.log(product)
  // console.log(product.show.id);
          
  const rootId=product.show.id;
  // console.log(rootId)

      
                
       const handleDetails=()=>{

         navigate(`/detail/${rootId}` ,{
          state:{
            item:product,
          }
         } )

       }
        
  return (
      
       <div>
            <div className='  flex flex-col md:flex-row w-full gap-10  md:gap-20 border  justify-between mb-4 flex-wrap   '>
                         <div>
                         <div className='flex gap-2 ml-5 ' >
                               <h1  className='font-bold' >Show Name :  </h1> 
                               <h2 className='text-slate-500' > {product.show.name} </h2>
                            </div>

                            <div className='flex ml-5 gap-2 ' > 
                               <h3 className='font-bold ' >language :</h3> <span className='text-blue-500' > {product.show.language} </span> 
                               
                             </div>

                             <div className='flex ml-5 gap-2 flex-wrap' > 
                               <h3 className='font-bold ' >officialSite:</h3> <span className='text-blue-500  flex-col md:flex-row ' > {product.show.officialSite} </span> 
                               
                             </div>

                         </div>

                   {/* <Link to={`/showMore/${item.show.id}`}   >   <button   className=' mr-10 font-bold text-red-600 hover:text-blue-500 hover:underline'> View More </button>   </Link> */}

                   <button  onClick={handleDetails}  className=' mr-10 font-bold text-red-600 hover:text-blue-500 hover:underline   '> View More </button>   
          </div>
          

        </div>
  )
}

export default ShowFeature