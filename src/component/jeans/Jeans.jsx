
import React, { useState } from 'react'
import Filter from '../filtered-bar/Filter';
import Cards from '../Cards/Cards';
import AllCartsApi from '../AllCarts/AllCartsApi';

const Jeans = () => {
    let jeansItem  = AllCartsApi.filter((cur)=>{
        return cur.category ==="jeans";
      });
      const [data,setData] = useState(jeansItem)
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

export default Jeans