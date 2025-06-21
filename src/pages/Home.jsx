// src/pages/Home.jsx
import { useState } from "react";
import mockRestaurants from "../data/mockRestaurants";
import RestaurantCard from "../components/RestaurantCard";
import { FiSearch, FiX } from "react-icons/fi";
import "./Home.css"; // Import the CSS file for animations

function Home() {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [price, setPrice] = useState("");

  // Filter restaurants based on search and filters
  const filteredRestaurants = mockRestaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(search.toLowerCase());
    const matchesCuisine = cuisine ? restaurant.cuisine === cuisine : true;
    const matchesPrice = price ? restaurant.priceRange === price : true;
    return matchesSearch && matchesCuisine && matchesPrice;
  });

  const resetFilters = () => {
    setSearch("");
    setCuisine("");
    setPrice("");
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center py-16 mb-10">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
          alt="Food Delivery Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
            Find Your Next Meal
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Discover the best restaurants, cafés, and bars in your area.
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="sticky top-20 z-40 mb-12 flex justify-center">
        <div className="flex flex-col md:flex-row gap-4 items-center bg-white/90 backdrop-blur-lg rounded-full shadow-xl px-6 py-4 border border-gray-200 w-full max-w-4xl">
          <div className="flex items-center w-full md:w-auto">
            <FiSearch className="text-gray-400 mr-2 text-xl" />
            <input
              type="text"
              placeholder="Search by restaurant name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full md:w-64 p-2 bg-transparent focus:outline-none text-gray-700"
            />
          </div>
          <select
            value={cuisine}
            onChange={e => setCuisine(e.target.value)}
            className="rounded-full px-4 py-2 border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Cuisines</option>
            <option>Italian</option>
            <option>Mexican</option>
            <option>American</option>
            <option>Japanese</option>
            <option>Indian</option>
            <option>Healthy</option>
          </select>
          <select
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="rounded-full px-4 py-2 border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Any Price</option>
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
          </select>
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full px-4 py-2 transition"
            title="Reset filters"
          >
            <FiX />
            Reset
          </button>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRestaurants.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-2xl py-20">
              <p>No restaurants found.</p>
              <p className="text-lg mt-2">Try adjusting your filters.</p>
            </div>
          ) : (
            filteredRestaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="restaurant-card-animate bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;