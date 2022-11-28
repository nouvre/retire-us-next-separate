import { useMemo } from "react";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, PersistState } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/reducer";
import { planReducer } from "./plan/reducer";
import { questionReducer } from "./questions/reducer";
import { settingReducer } from "./setting/reducer";
import { commonReducer } from "./common/reducer";
//types
import { AuthState } from "./auth/types";
import { PlanState } from "./plan/types";
import { QuestionState } from "./questions/types";
import { SettingState } from "./setting/types";
import { CommonState } from "./common/types";
//middleware
import { auth as authMiddleware } from "./auth/middleware";

const persistConfig: any = {
  key: "root",
  storage,
  whitelist: ["auth", "plans", "questions", "settings"],
  timeout: null,
};

let store: any;
const reducers = combineReducers({
  auth: authReducer,
  plans: planReducer,
  questions: questionReducer,
  settings: settingReducer,
  common: commonReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

function initStore(initialState: any) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, authMiddleware)
    )
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

export interface ApplicationState {
  auth: AuthState;
  plans: PlanState;
  questions: QuestionState;
  settings: SettingState;
  common: CommonState;
  _persist: PersistState;
}
