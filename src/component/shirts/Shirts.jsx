import React, { useState } from 'react'
import Filter from '../filtered-bar/Filter';
import AllcartApi from '../AllCarts/AllCartsApi';
import Cards from '../Cards/Cards';

const Shirts = () => {
  let shirtsItem  = AllcartApi.filter((cur)=>{
    return cur.category ==="shirt";
  });

  const [data,setData] = useState(shirtsItem)
      const [updatedData,setUpdatedData] = useState(data)
  return (
    <div style={{display:"flex"}}>
      <Filter
       setData = {setData} 
       data = {data}
       setUpdatedData = {setUpdatedData}
      />
      <div className='All-main'>
         {
          updatedData.map((cur)=>{
            return <Cards key = {cur.id} cur = {cur}/>
          })
         }
         </div>
    </div>
  )
}

export default Shirts