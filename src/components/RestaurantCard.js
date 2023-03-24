import { IMG_CDN_url } from "../config";



const RestaurantCard = (restaurant) => {
   const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant;
  return (
    <div className="card">
      <img src={IMG_CDN_url + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{lastMileTravelString} minutes</h5>
    </div>
  );
};

export default RestaurantCard;