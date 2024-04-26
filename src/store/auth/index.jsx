import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: false,
  accounts: [
    {
      id: 1,
      username: "melikedemiralay",
      fullName: "Melike",
      avatar:
        "https://pbs.twimg.com/profile_images/1783162857607069697/FUNxaN5G_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //state manipülasyonları için
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id != action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
