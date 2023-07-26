import { useState , useEffect } from "react";
import ShimmerUi from "./ShimmerUI";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import { RestroMenuAPI } from "./constants";


const RestroMenu = ()=>{
  const {resId} = useParams();
  const [showIndex , setshowIndex] = useState(null);
    
    

 const [MenuInfo,setMenuInfo] =useState(null);
 useEffect(()=>{
    fetchMenu();
 },[]);
 

 
 const fetchMenu = async()=>{
  const data = await fetch( RestroMenuAPI+resId);
  const json = await data.json();
  setMenuInfo(json);
  console.log(MenuInfo);
  console.log("hi");
  
  
  
 }

 if(MenuInfo==null) return <ShimmerUi/>;

 const ItemList = MenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || MenuInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
 const ItemCategory = ItemList.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 );
 console.log(ItemCategory);
 




return(
   <><div className="text-xl text-green-500 font-bold text-center mt-4 mb-4"><h1>Menu Items</h1></div><div className="Menu">

      {ItemCategory?.map((c, index) => (<ResCategory

         key={c.card.card.title}
         data={c?.card?.card}
         showItems={index === showIndex ? true : false}
         setshowIndex={() => setshowIndex(index)} />))}


   </div></>



)


}

export default RestroMenu;