import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom"

function filterData(searchText, restro) {
  const result = restro.filter((res) =>
    res?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return result;
}

const Body = () => { 

  const [searchText, setSearchText] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [allRestro, setAllRestro] = useState("")

  useEffect(() =>{
    restaurantCall();
   }, [])
 
   async function restaurantCall() {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.622551628399341&lng=79.40841592848301&page_type=DESKTOP_WEB_LISTING");
     const json = await data.json();
     setAllRestro(json?.data?.cards[2]?.data?.data?.cards)
     setFilteredRestro(json?.data?.cards[2]?.data?.data?.cards)

   }

  return (allRestro?.length === 0) ? <Shimmer /> :(
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestro);
            setFilteredRestro(data);    
          }}>
          search
        </button>
      </div>
      <div className="restaurant-list">
        {(filteredRestro?.length ===0)?<h1>No restaurant Match your filter</h1>:filteredRestro.map(function (restaurant) {
          return (
            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
