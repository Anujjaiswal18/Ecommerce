import React, { useContext, useState } from 'react'
import Filter from '../filtered-bar/Filter'
import Cards from '../Cards/Cards'
import AllcartApi from '../AllCarts/AllCartsApi'



const TopRated = () => {
  let topRatedApi = AllcartApi.filter((cur)=>{
    return cur.rate >=4
  });
  const [data,setData] = useState(topRatedApi)
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

export default TopRated