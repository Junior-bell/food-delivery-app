// src/pages/Orders.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import{ mockOrders} from "../data/mockOrders"; 

function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState(mockOrders);

  useEffect(() => {
    if (user) {
      // Mock API call
      axios.get(`https://api.example.com/orders?user=${user.email}`).then((response) => {
        setOrders(response.data);
      });
    }
  }, [user]);

  if (!user) {
    return <p>Please log in to view your orders.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="border rounded p-4 mb-4">
            <h3>Order #{order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default Orders;