
import Home from "./component/Home/Home"
import Navbar from "./component/Navbar/Navbar"
import Footer from "./component/Footer/Footer"
import { useEffect } from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import TopRated from "./component/TopRated/TopRated";
import All from "./component/AllCarts/All";
import Shirts from "./component/shirts/Shirts";
import Pants from "./component/pants/Pants";
import TShirts from "./component/t-shirts/T-shirts";
import Jeans from "./component/jeans/Jeans";
import DetailsCard from "./component/Cards/DetailsCard"
import AddToCart from "./component/AddToCart/AddToCart";
import ContextFnc from "./component/context/Context";
import Best from "./component/best/Best";
import  AOS from "aos"
import "aos/dist/aos.css"
import "./App.css"
const App = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:600,
      easing:"ease-in-sine",
      delay:100,
    })
    AOS.refresh();
  },[])


  return (
    <>
    <ContextFnc>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="topRated" element={<TopRated/>}/>
      <Route path="all" element={<All/>}/>
      <Route path="shirts" element={<Shirts/>}/>
      <Route path="pants" element={<Pants/>}/>
      <Route path="jeans" element={<Jeans/>}/>
      <Route path="TShirts" element={<TShirts/>}/>
      <Route path="best" element={<Best/>}/>
      <Route path="details/:id" element={<DetailsCard/>}/>
      <Route path="addToCart" element={<AddToCart/>}/>

    </Routes>
    <Footer />
    </BrowserRouter>
    </ContextFnc>
    </>
  );
};

export default App;
