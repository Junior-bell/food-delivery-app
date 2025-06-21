// src/pages/Restaurant.jsx
import { useParams, Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { useCart } from "../context/cartContext";
import { mockMenu } from "../data/mockMenu";
import mockRestaurants from "../data/mockRestaurants";

function Restaurant() {
  const { id } = useParams();
  const restaurant = mockRestaurants.find(r => r.id === parseInt(id));
  const menu = mockMenu[id] || {};
  const { addToCart } = useCart();

  if (!restaurant) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Restaurant not found</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to all restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-12">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">{restaurant.name}</h1>
          <p className="text-lg text-gray-200 mt-2">{restaurant.cuisine} • {restaurant.priceRange}</p>
        </div>
        <div className="absolute top-6 right-6 flex items-center bg-green-500 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg">
          <span>{restaurant.rating}</span>
          <span className="ml-1">★</span>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-4xl mx-auto">
        {Object.keys(menu).length === 0 ? (
          <p className="text-center text-gray-500 text-xl">Menu coming soon!</p>
        ) : (
          Object.entries(menu).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3 mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {items.map((item) => (
                  <MenuItem key={item.id} item={item} onAddToCart={addToCart} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Restaurant;