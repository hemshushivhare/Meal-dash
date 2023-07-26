import React, { Children, Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/Contactus";
import Footer from "./components/Footer";
import RestroMenu from "./components/RestroMenu";
//import GroceryMart from "./components/GroceryMart";

import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import appstore from "./appSore";
import Cart from "./components/Cart";



const GroceryMart = lazy(()=>import("./components/GroceryMart"));


const AppUi = ()=>{
    return(
   <>
   <Provider store ={appstore}>
   <Header/>
   <Outlet/>
   </Provider>
   
    
    
  
    
    

    
</>
  )
};

const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<AppUi/>,
  

    children:[

      {
        path:"/",
        element:<Body/>
      },
    {
      path:"/about",
      element:<About/>
      
    },

    {
      path:"/Contactus",
      element:<ContactUs />
    },

   

    {
      path:"/GroceryMart",
      element:<Suspense><GroceryMart /></Suspense>
    },

    {
      path:"/Restro-Menu/:resId",
      element:<RestroMenu />
    },

    
    {
      path:"/LoginPage",
      element:<LoginPage/>
    },
    
    {
      path:"/Cart",
      element:<Cart/>
    },
    

    
  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
