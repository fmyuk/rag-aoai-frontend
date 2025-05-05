import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { MessageType } from "@/types/types";

type InitialStateType = {
  anyourdata: MessageType[];
};

const initialState: InitialStateType = {
  anyourdata: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    inputMessageToReduxStore: (state, action) => {
      if (action.payload.pathname === "/") {
        state.anyourdata.push(action.payload);
      }
    },
  },
});

export const { inputMessageToReduxStore } = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message;
export default messageSlice.reducer;
