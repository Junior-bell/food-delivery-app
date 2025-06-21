// src/components/RestaurantCard.jsx
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
      <img 
        src={restaurant.image} 
        alt={restaurant.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-5 bg-white">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-800 mb-1">{restaurant.name}</h2>
          <div className="flex items-center bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            <span>{restaurant.rating}</span>
            <span className="ml-1">★</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine} • {restaurant.priceRange}</p>
        <div className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>{restaurant.deliveryTime}</span>
        </div>
      </div>
    </Link>
  );
}
export default RestaurantCard;