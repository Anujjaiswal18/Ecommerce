

import React, { useState } from 'react'
import Cards from '../Cards/Cards';
import Filter from '../filtered-bar/Filter';
import AllCartsApi from '../AllCarts/AllCartsApi';

const TShirts = () => {
    let t_Shirt_Item  = AllCartsApi.filter((cur)=>{
        return cur.category ==="t-shirt";
      });
      const [data,setData] = useState(t_Shirt_Item)
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

export default TShirts