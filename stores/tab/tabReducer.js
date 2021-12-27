import * as tabActionTypes from "./tabActions";
const initialState = {
  selectTab: "",
};
const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActionTypes.SET_SELECTED_TAB:
      return {
        ...state,
        selectTab: action.payload.selectTab,
      };
    default:
      return state;
  }
};

export default tabReducer;
