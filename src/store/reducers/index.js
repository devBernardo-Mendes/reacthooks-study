export default function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "number_mult7":
      return { ...state, number: state.number * 7 };
    case "number_share25":
      return { ...state, number: state.number / 25 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "int":
      return { ...state, number: parseInt(state.number) };
    case "number_AddN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}
