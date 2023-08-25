import { configureStore } from "@reduxjs/toolkit";
import openModal from "./openModal";
const store = configureStore({
  reducer: {
    open: openModal,
  },
});

export default store;
