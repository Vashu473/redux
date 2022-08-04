const initial = {
  data: "",
};

const testReducer = (state = initial, action) => {
  switch (action.type) {
    case "show":
      return { ...state, data: action.data };
      break;

    default:
      return state;
      break;
  }
};
export default testReducer;
