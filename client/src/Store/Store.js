import { configureStore } from "@reduxjs/toolkit";
import studsReducer from "../Features/StudSlice";
import noteReducer from "../Features/NoteSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { combineReducers } from "redux";

//import adminReducer from "../Features/AdminSlice";

import adminReducer from "../Features/AdminSlice";

// Redux Persist config
const persistConfig = {
  key: "reduxstore", // The key to identify the persisted state in storage
  storage, // The storage method (localStorage)
};

const rootReducer = combineReducers({
  studs: studsReducer, // Manage student slice of the state
  notes: noteReducer, // Manage notes slice of the state
  admins: adminReducer, // // Manage admin slice of the state
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer in the store,
});

const persistore = persistStore(store); // Create persistore for rehydration

export { store, persistore };

/*


export const store = configureStore({
  reducer: {
    studs: studsReducer,
    notes: noteReducer,
    admins: adminReducer,
  },
});

*/
