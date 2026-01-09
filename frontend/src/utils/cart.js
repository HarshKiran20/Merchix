// export const getCart = () => {
//   console.log("getCart called");
//   return JSON.parse(localStorage.getItem("cart")) || [];
// };

// export const addToCart = (product) => {
//   console.log("addToCart called with:", product);

//   if (!product || !product._id) {
//     console.error("Invalid product:", product);
//     return;
//   }

//   const cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cart.push({
//     _id: product._id,
//     name: product.name,
//     price: product.price,
//     quantity: 1
//   });

//   localStorage.setItem("cart", JSON.stringify(cart));

//   console.log("Cart saved:", cart);
// };

// export const removeFromCart = (id) => {
//   const cart = getCart().filter(item => item._id !== id);
//   localStorage.setItem("cart", JSON.stringify(cart));
// };
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCart = (product) => {
  if (!product || !product._id) return;

  const cart = getCart();
  const existing = cart.find(item => item._id === product._id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = getCart().filter(item => item._id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
