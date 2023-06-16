import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    todopago: searchSlice,
  },
});
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   storage: storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     anay: persistedReducer,
//   },
// });

// export let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
