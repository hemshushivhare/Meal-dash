import {useState} from "react";
import ItemCategory from "./CategoryItems";
import { ChevronDown } from "lucide-react";





const ResCategory = (props) => {

   
    const handleclick = ()=> {
        props.setshowIndex();
    };
    
    return (
            <>
               
            <div className="Category text-lg border bg-gray-100 shadow-lg rounded-md  m-2 my-4 p-2 mx-64"> 
                <div className="flex justify-between" onClick={handleclick}>
                <div><span className="text-xxl font-bold">{props.data.title} ({props.data.itemCards.length})</span>
                </div>
                    <div><ChevronDown /></div>
                </div>
                <div className="Items">
                    {props.showItems && <ItemCategory items={props.data.itemCards} />}

                </div>
                </div>

            </>

            )
}
            export default ResCategory;