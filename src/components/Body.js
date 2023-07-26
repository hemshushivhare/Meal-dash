import { useEffect, useState } from "react";
import { ResCards } from "./ResCards";
import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";
import { RestroAPI } from "./constants";
import { PromotedResCards } from "./ResCards";
import useOnlineStatus from "./OnlineStatus";
import ImageSlider from "./Slider";
import img1 from "./images/image1.png";
import Footer from "./Footer";






const Body = () => {



  const [resList, setresList] = useState([]);
  const [SearchedRestro, setSearchedRestro] = useState([]);

  const PromotedResCards1 = PromotedResCards(ResCards);

  useEffect(() => {
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(RestroAPI);
    const json = await data.json();
    console.log(json);
    console.log("data");
    
    setresList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setSearchedRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  
  

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return (
      <div className="h-screen flex justify-center items-center w-6/12" >
       <img src={img1} alt="image1"></img>
      </div>
     
    )
  };

  if (resList.length===0) return <ShimmerUi/>;


  return (
    
    <div className="BODY">
    
      <ImageSlider/>
      <div className="Search-topRated flex justify-between">
        <div className="Search-bar mt-6 ml-12">
          <input className=" ml-1 shadow appearance-none border border-black rounded w-100  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=""
            value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button className="ml-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={() => {
              const searchedrestro = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setSearchedRestro(searchedrestro);
            }}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Search
            </span>
          </button>
        </div>

        <div className="filter mb-3 mt-3 mr-12 p-3">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"

            onClick={() => {
              const filteredRestro = [...resList].sort((res1,res2) => { return res2.info.avgRating-res1.info.avgRating });
              setSearchedRestro(filteredRestro);
            }
            }>

            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Top Rated Restro
            </span>

          </button><br></br>

        </div>


        <div className="filter mb-3 mt-3 mr-12 p-3">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"

            onClick={() => {
              const filteredRestro = [...resList].sort((res1,res2) => { return res1.info.deliveryTime - res2.info.deliveryTime });
              setSearchedRestro(filteredRestro);
            }
            }>

            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Delivery Time
            </span>

          </button><br></br>

        </div>

        

      </div>

      <div className="border bottom-2 w-[92%] ml-14"></div>


      <div className="res-container flex flex-wrap ">
        {SearchedRestro.map((res) => {
          return (
            <Link key={res.info.id} to = { "/Restro-Menu/"+res.info.id }>
           {res.info.promoted?(<PromotedResCards1 resData={res}/>):
             (<ResCards  key= {res.info.id} resData={res}/>)}

             </Link>
        )})}


       </div>  
       <Footer/>
       </div>

      
       
      
      
  
    )
    
  }

export default Body;