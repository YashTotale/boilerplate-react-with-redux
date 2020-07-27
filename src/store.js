//Redux Imports
import { createStore, combineReducers, applyMiddleware } from "redux";
//Redux Persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
//Redux Thunk
import thunk from "redux-thunk";
//Redux Devtools
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  test: (state = true, action) => false, //Should make test false
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
