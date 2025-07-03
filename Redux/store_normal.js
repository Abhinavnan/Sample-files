import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "./personalDetailsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


// Persist configuration
const persistConfig = {
  key: "root", // Key for the persisted state in localStorage
  storage, // Use localStorage as the storage engine
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, personalDetailsReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: {
    personalDetails: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions in serializable check
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Create a persistor object to persist the store
export const persistor = persistStore(store);