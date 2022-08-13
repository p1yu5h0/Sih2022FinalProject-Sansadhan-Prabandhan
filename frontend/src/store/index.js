
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'
import authReducer from "./auth/reducers";


const rootReducer = combineReducers({
    test : ()=>'Hello',
    auth : authReducer
});
// // Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method
  storage,
  // Merge two-levels deep.
  stateReconciler: autoMergeLevel2,
  // Whitelist (Save Specific Reducers)
  whitelist: ["auth"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    
  ],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line 
export default () => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  let store = createStore(persistedReducer,composeWithDevTools(middleWareEnhancer))
  let persistor = persistStore(store)
  return { store, persistor }
}