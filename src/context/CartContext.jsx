import { createContext, useReducer } from "react";

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
case "ADD":
  const exist = state.find(
    i => i.id === action.payload.id && i.size === action.payload.size
  );

  if (exist) {
    return state.map(i =>
      i.id === action.payload.id && i.size === action.payload.size
        ? { ...i, qty: i.qty + 1 }
        : i
    );
      }

      return [...state, { ...action.payload, qty: 1 }];

  case "DECREASE":
  const item = state.find(
    i => i.id === action.payload.id && i.size === action.payload.size
  );

  if (item.qty === 1) {
    return state.filter(
      i => !(i.id === action.payload.id && i.size === action.payload.size)
    );
  }

  return state.map(i =>
    i.id === action.payload.id && i.size === action.payload.size
      ? { ...i, qty: i.qty - 1 }
      : i
  );

    case "REMOVE":
      return state.filter(i => i.id !== action.payload);

    default:
      return state;
  }
};

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;