// src/components/Header.jsx
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  const activeLinkStyle = {
    color: '#34D399',
    fontWeight: 'bold',
    textShadow: '0 2px 8px rgba(52,211,153,0.15)'
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gradient-to-r from-blue-50/80 via-white/80 to-green-50/80 border-b border-blue-100 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-extrabold text-gray-800 hover:text-blue-600">
          <span className="inline-block w-8 h-8 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
          </span>
          FoodDash
        </NavLink>
        <ul className="flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <NavLink 
              to="/" 
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              className="hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded-lg"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/cart" 
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              className="hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded-lg"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/orders" 
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              className="hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded-lg"
            >
              Orders
            </NavLink>
          </li>
          {user ? (
            <li>
              <button 
                onClick={logout} 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors duration-200"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink 
                to="/login" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors duration-200"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;