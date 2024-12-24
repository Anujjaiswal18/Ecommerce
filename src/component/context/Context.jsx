import { createContext, useState } from "react";
import AllCartApi from "../AllCarts/AllCartsApi"

export const Context = createContext();

const ContextFnc = ({children}) =>{
    const [addCartData , setAddCardData] = useState([]);
    const [searchCart , setSearchCart] = useState("")
    return <Context.Provider value={{addCartData,setAddCardData , searchCart , setSearchCart}}>{children}</Context.Provider>
}


export default ContextFnc;