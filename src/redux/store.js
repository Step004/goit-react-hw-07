import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactPersistConfig = {
  key: "contactValue",
  storage,
  // whitelist: ["id", "name", "number"],
};

const pContactReducer = persistReducer(contactPersistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contact: pContactReducer,
    filter: filterReducer,
  },
  middleware: (getDefoultMiddleware) =>
    getDefoultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
