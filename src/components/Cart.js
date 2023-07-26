import { useSelector } from "react-redux";
import img2 from "./images/empty cart.png";
import { clearCart } from "../CartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addItem } from "../CartSlice";
import { removeItem } from "../CartSlice";


const Cart = () => {

    const [OrderPlaced, setOrderPlaced] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOrderPlaced(true);
        setTimeout(()=>{
            dispatch(clearCart());
            <Link to ="/"></Link> 
        },3000)
    };


  


    dispatch = useDispatch();
    const handleclick = () => {
        dispatch(clearCart())
    };

    
    const handleRemove = (item) => {
        dispatch(removeItem(item.card.info.id));
    }

    const handleAdd = (item) => {
        dispatch(addItem(item))
    }


    const CartItems = useSelector((store) => store.cart.Items);
    console.log(CartItems);
    console.log("HI");

       let totalPrice = 0;
       CartItems.forEach((item)=> {
       const itemPrice = item.card.info.price / 100 || item.card.info.defaultPrice / 100;
       totalPrice += itemPrice*item.quantity;
   });

    if (CartItems.length === 0) return <div><img src={img2} alt="image1"></img></div>;

    return (
           <>
            <div>
            {OrderPlaced? (
                <>
                <div className=" h-screen flex justify-center items-center text-center">
               
                <div className="text-green-600 font-semibold mb-4 text-2xl">Your Order has been placed successfully!</div>
                </div>
                </>
            ):(
                        <><div>
                            <div className="text-2xl text-green-600 text-center font-bold mt-2 mb-2">Cart Items</div>
                            {CartItems.map((item) => (
                                <div>

                                    <div className="" key={item.card.info.id}>
                                        <div className=" border-gray-200 border-b-2 gray py-2 w-4/12 ml-[480px] mt-10">
                                            <div className="flex justify-between">
                                                <div className="w-9/12">
                                                    <span className="mt-4 text-lg font-semibold">{item.card.info.name}</span>
                                                    <span className="text-lg font-semibold text-green-500">-₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>

                                                </div>

                                                <div className="w-3/12">
                                                    <div className="absolute">
                                                   
                                                         <div >
                                                           <button className=" mx-14 w-20  bg-white text-green-500 font-bold px-4 flex space-x-2 border rounded-sm">
                                                            <span className="remove-item-btn text-xl font-bold" onClick={() => handleRemove(item)}>-</span>
                                                            <span>{item.quantity}</span>
        
                                                            <span className="add-item-btn text-xl font-bold" onClick={() => handleAdd(item)} >+</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                    {item.card.info.imageId ? <img className="rounded-lg shadow-md  ml-10" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.card.info.imageId}></img> : <img className="rounded-lg shadow-md w-2/3 ml-10"></img>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className=" h-10 cart-head flex justify-evenly w-7/12 ml-[300px] space-x-28 text-xl mt-2">
                                <h2>Items - {CartItems.length}</h2>
                                <h2>Total Price : ₹{totalPrice}</h2>
                            </div>
                        
                        
                        <div className=" flex justify-evenly w-7/12 ml-[300px] mt-4 space-x-28 mb-10 ">
                                <button className="bg-blue-500 w-28 h-10 rounded-lg  hover:bg-blue-700 text-white font-Inter space-x-10 " onClick={handleclick}>Clear Cart</button>
                                <button className="bg-blue-500 w-28 h-10 rounded-lg  hover:bg-blue-700 text-white font-Inter " onClick={handleSubmit}>Place Order</button>
                            </div></>
            )}
            
        </div>
            
            
  
              


        
        
 </> 

 )



}


export default Cart;