// export const getCart = () => {
//   return JSON.parse(localStorage.getItem("cart")) || [];
// };

// export const addToCart = (product) => {
//   if (!product || !product._id) return;

//   const cart = getCart();
//   const existing = cart.find(item => item._id === product._id);

//   if (existing) {
//     existing.quantity += 1;
//   } else {
//     cart.push({
//       _id: product._id,
//       name: product.name,
//       price: product.price,
//       quantity: 1
//     });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// export const removeFromCart = (id) => {
//   const cart = getCart().filter(item => item._id !== id);
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// export const clearCart = () => {
//   localStorage.removeItem("cart");
// };
import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders/my").then(res => setOrders(res.data));
  }, []);

  return (
    <>
      <h2>My Orders</h2>

      {orders.map(order => (
        <div key={order._id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <p><b>Order ID:</b> {order._id}</p>
          <p><b>Total:</b> ₹{order.totalAmount}</p>
          <p><b>Status:</b> {order.orderStatus}</p>
        </div>
      ))}
    </>
  );
}
