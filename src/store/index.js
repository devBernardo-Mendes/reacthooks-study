import reducer from "./reducers";
import { numberAdd2 } from "./action/number";

const initialState = {
  cart: [],
  products: [],
  user: null,
  //foco...
  number: 0,
};

export { initialState, reducer, numberAdd2 };
