import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectTab: "",
};
export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setSelectTab: (state, action) => {state.selectTab = action.payload},
  },
});
export const { setSelectTab } = tabSlice.actions;
export const selectedTab = (state) => state.tab.selectTab;
export default tabSlice.reducer;
