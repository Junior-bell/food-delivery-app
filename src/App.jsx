import { BrowserRouter,Routes, Route } from 'react-router-dom' ;
import Header from "./components/Header";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Cart from "./pages/cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <main className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurant/:id" element={<Restaurant/>}/>
        <Route path="/cart" element ={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App
