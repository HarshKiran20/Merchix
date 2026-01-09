import { getCart, clearCart } from "../utils/cart";
import API from "../services/api";

export default function Checkout() {
  const cart = getCart();

  const placeOrder = async () => {
    const orderData = {
      items: cart.map(item => ({
        product: item._id,
        quantity: item.quantity,
        price: item.price
      })),
      totalAmount: cart.reduce((s, i) => s + i.price * i.quantity, 0),
      shippingAddress: {
        addressLine: "123 Main Road",
        city: "Mumbai",
        state: "MH",
        pincode: "400001"
      },
      paymentMethod: "ONLINE"
    };

    await API.post("/orders", orderData);
    clearCart();
    alert("Order placed successfully");
  };

  return (
    <>
      <h2>Checkout</h2>
      <button onClick={placeOrder}>Place Order</button>
    </>
  );
}
