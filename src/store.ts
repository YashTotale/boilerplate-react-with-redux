//Redux Imports
import { createStore, combineReducers, applyMiddleware } from "redux";

//Redux Persist Imports
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

//Redux Thunk Imports
import thunk from "redux-thunk";

//Redux Devtools Imports
import { composeWithDevTools } from "redux-devtools-extension";

//The reducers that are imported from the reducers folder will be added to this object
const reducers = {};

//The configuration for the persisted reducer
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
//@ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  //Creating the store with the persisted reducer, redux devtools, and redux thunk
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
