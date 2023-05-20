export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  

  export const decreaseCart = (product) => {
    return {
      type: 'DECREASE_QTY',
      payload: product,
    };
  };
  