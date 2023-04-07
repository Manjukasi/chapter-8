import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_url } from "../config";
import {MenuShimmer} from  "../components/shimmer"

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
  

  return (!restaurantD)? <MenuShimmer/> :(
    <div className="menu-list">
      <div className="menu-container">
       <img src={IMG_CDN_url + restaurantD?.cloudinaryImageId} alt="image"/>
       <div className="details">
         <h2>{restaurantD?.name}</h2>
         <h3>{restaurantD?.areaName}</h3>
         <h3>{restaurantD?.city}</h3>
         <h3>Ratings: {restaurantD?.avgRating}</h3>
         <h3>{restaurantD?.costForTwoMsg}</h3>
       </div>
     </div> 
     <div className="menu">{menuList?.map((item) =>
       <div className= "menu-box" key= {item?.card?.info?.id}>
          <div className="items">
            <div>{item?.card?.info?.name}</div>
            <br></br>
            <div> ₹{item?.card?.info?.price / 100} </div>
          </div>
          <img src={IMG_CDN_url + item?.card?.info?.imageId} />
        </div>)}
      </div>
    </div>
  )
}

export default RestaurantMenu;