import { AlertColor } from "@mui/material";

interface initialState {
  cart: {
    [key: string]: {
      productName: string;
      productCount: number;
      productImage: string;
      productPrice: number;
    };
  };
  favorite: { [key: string]: Product };
  compare: string[];
}

const initialState: initialState = {
  cart: {},
  favorite: {},
  compare: [],
};

export function userActionsReducer(state = initialState, action: any) {
  let newState = { ...initialState };
  switch (action.type) {
    case "ADD_To_CART":
      newState = { ...state, cart: action.cart };
      break;
    case "SET_CART":
      newState = { ...state, cart: action.cart };
      break;
    case "ADD_To_FAVORITE":
      newState = { ...state, favorite: action.favorite };
      break;
    case "SET_FAVORITE":
      newState = { ...state, favorite: action.favorite };
      break;
    case "ADD_COMPARE":
      newState = { ...state, compare: action.compare };
      break;
    case "SET_COMPARE":
      newState = { ...state, compare: action.compare };
      break;
    default:
  }
  return newState;
}
