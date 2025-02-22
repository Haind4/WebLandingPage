import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import CartStore from './actionReducers/CartStore'
import CommonStore from "./actionReducers/CommonStore";
import UserStore from "./actionReducers/UserStore";

const makeStore = () =>
  configureStore({
    reducer: {
      CartStore: CartStore,
      CommonStore: CommonStore,
      UserStore: UserStore,

    },
  });


export const wrapper = createWrapper(makeStore);