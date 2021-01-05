import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessage: false,
  },
  reducers: {
    openSendMessage: state => (state.sendMessage = true),
    closeSendMessage: state => (state.sendMessage = false),
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectmail = state => state.mail.sendMessage;

export default mailSlice.reducer;
