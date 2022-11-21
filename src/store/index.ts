import { useMemo } from "react";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AuthState } from "./auth/types";
import { PlanState } from "./plan/types";
import { authReducer } from "./auth/reducer";
import { planReducer } from "./plan/reducer";
import { questionReducer } from "./questions/reducer";
import { commonReducer } from "./common/reducer";
import { QuestionState } from "./questions/types";
import { plaidReducer } from "./banking/plaid/reducer";
import { PlaidState } from "./banking/plaid/types";
import { yodleeReducer } from "./banking/yodlee/reducer";
import { YodleeState } from "./banking/yodlee/types";
import { settingReducer } from "./setting/reducer";
import { SettingState } from "./setting/types";
import { CommonState } from "./common/types";
import thunkMiddleware from "redux-thunk";

export interface ApplicationState {
  auth: AuthState;
  plans: PlanState;
  questions: QuestionState;
  bank_plaid: PlaidState;
  bank_yodlee: YodleeState;
  settings: SettingState;
  common: CommonState;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "plans", "questions"]
};

let store: any;
const reducers = combineReducers({
  auth: authReducer,
  plans: planReducer,
  questions: questionReducer,
  bank_plaid: plaidReducer,
  bank_yodlee: yodleeReducer,
  settings: settingReducer,
  common: commonReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

function initStore(initialState: any) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
