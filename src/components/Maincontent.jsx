import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import {  setMovieData } from '../redux/productSlice';
import { Link, useNavigate } from 'react-router-dom';

import ShowFeature from '../pages/ShowFeature';

const Maincontent = () => {
            
     const navigate=useNavigate();
   
//     const [products,setProducts]=useState([]);
       const dispatch=useDispatch();

      useEffect(()=>{
                 const fetchData= async()=>{
                 const res=  await fetch("https://api.tvmaze.com/search/shows?q=al")
                
                    const resData=await res.json();
                    console.log(resData);
                  
                    dispatch( setMovieData(resData))
                   }  
                 fetchData();
              
      },[])
              const productData=useSelector((state)=>state.product.movieList)
              console.log(productData)

    return (    
                            
       <div className='' >  

                         {
                        
                        productData.map((item)=>(
                             <ShowFeature  key={item.show.id}  product={item}   />
                        ))
                         
                    }




                    
            </div>
  )
}

export default Maincontent
