import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";


const ItemCategory = (props) => {
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
       
        dispatch(addItem(item));
    }
    return (
        <>
            
       <div>
                {props.items.map((item) => (
                    <div>
                        <div className="" key={item.card.info.id}>
                            <div className=" border-gray-200 border-b-2 gray py-2">
                                <div className="flex justify-between">
                                    <div className="w-9/12">
                                        <span className="mt-4 text-lg font-semibold">{item.card.info.name}</span>
                                        <span className="text-lg font-semibold">-₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                                        <p>{item.card.info.description}</p>
                                    </div>

                                    <div className="w-3/12">

                                        <div className="absolute">
                                        <button className=" mx-20 w-20 rounded-sm border bg-white text-green-500 font-bold hover:text-green-700" onClick={()=>handleAddItem(item)}>ADD  </button>
                                        </div>
                                          { item.card.info.imageId?<img className="rounded-lg shadow-md w-2/3 ml-10" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.card.info.imageId}></img>:<img className="rounded-lg shadow-md w-2/3 ml-10"></img>}
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                ))}



            </div>


        </>
    )
}
export default ItemCategory;