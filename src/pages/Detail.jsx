import React ,{useEffect} from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';



const Detail = () => {
       
    // const [details,setDetails]=useState({});
    // const location=useLocation();
    // console.log(location);
    // useEffect(()=>{
    //     setDetails(location.state.item)
    // },[] )
    // console.log(details)
    
    // console.log(details.show.name)

           
    const location=useLocation();
    const data=location.state.item;
    console.log(data)

        
  return (
    <div>
        
        <div  className='  p-0 md:p-4 mt-1 flex flex-col md:flex-row w-full   items-center md:items-start  justify-center gap-5 ' >  
                       
                       {/* <div className='w-[800px]  h-[380px]   ' >
                           <img src={data.show.image.original} alt=""  className=' h-[370px]      '  />
                       </div> */}
                         <img src={data.show.image.original} alt=""  className='h-96 mt-2 items-start md:items-center block md:sticky top-20 ' /> 
                       

                       <div>
                            <div className='flex gap-2' >
                                <h1  className='font-bold '  > Show Name : </h1>
                                 <h3>  {data.show.name} </h3>
                             </div>

                            
                             <div className='flex gap-2' >
                                <h1 className='font-bold' > Language : </h1>
                                 <h3>  {data.show.language} </h3>
                             </div>
                            
                             <div className='flex gap-2' >
                                <h1 className='font-bold' > Premiered : </h1>
                                 <h3>  {data.show.premiered} </h3>
                             </div>
                             <div className='flex  flex-col ' >
                                <h1 className='font-bold' > Summary : </h1>
                                 <h3 className='' >  {data.show.summary} </h3>
                             </div> 
                         </div>
             
        </div>


        
    </div>
  )
}

export default Detail