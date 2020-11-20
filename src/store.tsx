//React Imports
import React from "react";

//Redux Imports
import { createStore, combineReducers, applyMiddleware } from "redux";

//Redux Persist Imports
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

//Redux Thunk Imports
import thunk from "redux-thunk";

//Redux Devtools Imports
import { composeWithDevTools } from "redux-devtools-extension";

//Reducer Imports
import { display } from "./Redux/reducers";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const reducers = {
  display,
};

//The configuration for the persisted reducer
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

const configuredStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(configuredStore);

const ReduxStore: React.FC = ({ children }) => {
  return (
    <Provider store={configuredStore}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxStore;
