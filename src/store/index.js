import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home.js";
import discoverReducer from "./modules/discover/index.js";
const store = configureStore({
  reducer: {
    home: homeReducer,
    discover: discoverReducer,
  },
});

export default store;
