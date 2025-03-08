export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

