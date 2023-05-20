const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productExist = state.cartItems.find((item) => item.id === action.payload.id);
      if (productExist) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        const newCartItems = [...state.cartItems, { ...action.payload, qty: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        return {
          ...state,
          cartItems: newCartItems,
        };
      }
    case 'DECREASE_QTY':
      const productExis = state.cartItems.find((item) => item.id === action.payload.id);
        if (productExis && productExis.qty === 1) {
          const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
          return {
            ...state,
            cartItems: updatedCartItems,
          };

        } else if (productExis) {
          const newCartItems = state.cartItems.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item)
          localStorage.setItem('cartItems', JSON.stringify(newCartItems));
          return {
            ...state,
            cartItems: newCartItems,
          };
        } else {
          return state;
        }   
    default:
      return state;
  }
};


export default cartReducer;


