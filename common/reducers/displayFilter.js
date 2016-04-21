export default function displayFilter(state, action) {
  state = state || "SHOW_ALL";

  switch (action.type) {
    case "SET_DISPLAY_FILTER":
      return action.filter;

    default:
      return state;
  }
};
