



   export const ResCards = (props)=>{
      const {resData} = props;
      return (
        
          <div className=" ml-14 mt-6 w-72 h-96 shadow-lg hover:bg-cyan-100 hover:scale-105 ease-out duration-500" >
          <div><img  className = "res-img w-60 mt-6 ml-5 rounded-md shadow-md " src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.info.cloudinaryImageId} alt="Restro-img"></img>
          </div>
          <div>  <h1 className="font-bold text-xl  font  mt-4 ml-4">{resData.info.name}</h1>
            <h4 className="ml-4 mt-1 truncate font-semibold  hover:text-clip">{resData.info.cuisines.join(" , ")} </h4>
            <h3 className="ml-4 mt-1">{resData.info.costForTwo} </h3>
            <h4 className="ml-4 mt-1">Rating : {resData.info.avgRating}⭐</h4>
            <h4 className="ml-4 mt-1">Delivery Time 🛵: {resData.info.deliveryTime} Min</h4>
            </div>
          
          </div>
        
      
      );
    }

    export const PromotedResCards = (ResCards)=>{
      return(props)=>{
        return(
          <>
          <label className="absolute p-2 mx-16 my-6 font-Inter rounded-lg text-white bg-black">Promoted</label>
          <ResCards {...props}/>
          </>
          
        )
      }
    }