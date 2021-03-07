import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface DisplayState {
  isDarkMode: boolean | null;
}

export const initialDisplayState: DisplayState = {
  isDarkMode: null,
};

const displaySlice = createSlice({
  name: "display",
  initialState: initialDisplayState,
  reducers: {
    toggleDarkMode: (state, action: PayloadAction<boolean | undefined>) => ({
      ...state,
      isDarkMode: action.payload ?? !state.isDarkMode,
    }),
  },
});

// Actions
export const { toggleDarkMode } = displaySlice.actions;

// Selectors
export const getIsDarkMode = (state: RootState): DisplayState["isDarkMode"] =>
  state.display.isDarkMode;

// Reducer
export const displayReducer = displaySlice.reducer;

export default displaySlice;
