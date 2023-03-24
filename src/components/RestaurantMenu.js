import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_url } from "../config";
import Shimmer from "./shimmer";


const RestaurantMenu = () =>{
  const params = useParams();
  const {resId} = params;

  const [restaurantD, setRestaurantD] = useState(null);
  const [menuList, setMenuList] = useState(null)

  useEffect(()=>{
    callRestroInfo()
  },[])
  
  async function callRestroInfo(){
   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.622551628399341&lng=79.40841592848301&restaurantId=" + resId)
   const json = await data.json()
   console.log(json)
   setRestaurantD(json.data?.cards[0]?.card?.card?.info)
   setMenuList(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  }
  

  return (!restaurantD)? <Shimmer/> :(
    <div className="restro">
      <div className="details">
       <h1>Restaurant id:{resId}</h1>
       <img className="menuImage" src={IMG_CDN_url + restaurantD?.cloudinaryImageId}/>
       <div>
         <h2>{restaurantD?.name}</h2>
         <h3>{restaurantD?.areaName}</h3>
         <h3>{restaurantD?.city}</h3>
         <h3>{restaurantD?.avgRating}</h3>
         <h3>{restaurantD?.costForTwoMsg}</h3>
       </div>
       <div>{menuList?.map((item) => <><li key= {item?.card?.info?.id}>{item?.card?.info?.name}</li></>)}</div>
      </div>
    </div>
  )
}

export default RestaurantMenu;