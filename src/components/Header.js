import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./OnlineStatus";
import {ShoppingCart , Home, Send ,ShoppingBag,WalletCards} from "lucide-react";
import { useSelector } from "react-redux";

const Header=()=>{
  const onlinestatus =useOnlineStatus();
  const cartItems = useSelector((store)=>store.cart.Items);
  
    return(

    
      <>
      <div className=" h-20 bg-slate-50 flex space-x-96  shadow-sm ">
  
       <div >
  
       <img className="w-16 h-12 mt-4 mb-3 ml-6 flex items-center justify-center rounded-lg " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRIhuCrv1VAnnSbXxegcIzlw6DSbb9dv1R2_ibcD8eyLqgBZx01poXUMyx3IGC_1cn6I&usqp=CAU" alt="logo-image" ></img>
  
       </div>
  
       <div className="">
        <ul className=" ml-52 flex items-center justify-center h-20 space-x-6">
        <li className="font-Inter text-lg mb-1">Online:{onlinestatus?"🟢":"🔴"}</li>
          <li className=" text-lg font-Inter flex mx-1 mb-1" ><Link to ="/" className="flex  hover:text-cyan-500"><Home/>  Home</Link></li>
          <li className= "font-Inter text-lg flex mb-1 mx-2"> <Link to="/Contactus" className="flex  hover:text-cyan-500"><Send/> Contact Us</Link></li>




         
          <li className= "font-Inter text-lg flex mx-1 mb-1  hover:text-cyan-500"><Link to = "/Cart" className="flex"><ShoppingCart/> Cart ({cartItems.length})</Link></li>
          

          <li className= "font-Intertext-lg mb-1 flex mx-2  hover:text-cyan-500"><Link to ="/GroceryMart" className="flex"><ShoppingBag/> Grocery Mart</Link></li>
          

          <button className = "Log-In button bg-blue-500 w-28 h-10 rounded-lg  hover:bg-blue-700 text-white font-Inter ">
          <Link to= "/LoginPage">Login</Link>
        
          
          </button>
        </ul>
       </div>
  
  
      </div>
  
      </>
  
  
  
  
    )
  }

  export default Header;