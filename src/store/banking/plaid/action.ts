import { ThunkAction } from "redux-thunk";
import { ActionCreator, Action, Dispatch } from "redux";
import { ApplicationState } from "../../index";
import axios from "../../../util/api";
import { PlaidActionTypes, PlaidResult } from "./types";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const generateToken: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    return await axios.post("banking/create-plaid-link-token").then(({ data }) => {
      if (data) {
        return dispatch({
          type: PlaidActionTypes.SET_LINK_TOKEN,
          payload: data
        });
      }
    }).catch((e) => {
      return dispatch({
        type: PlaidActionTypes.REQUEST_ERROR,
        payload: e.response
      });
    });
  }
}

export const addAccount: AppThunk = (data: PlaidResult) => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: PlaidActionTypes.ADD_PLAID_ACCOUNT,
      payload: data
    });
  };
}

export const saveTokens: AppThunk = (public_tokens) => {
  return async (dispatch: Dispatch) => {
    return await axios.post("banking/set-plaid-access-token", {public_tokens}).then(({ data }) => {
      dispatch({
        type: PlaidActionTypes.SAVE_ACCESS_TOKEN,
        payload: data
      });
    }).catch((e) => {
      dispatch({
        type: PlaidActionTypes.SAVE_ACCESS_TOKEN,
        payload: e.response
      });
    });
  }
}

export const getBalanceData: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    return await axios.get("banking/get-plaid-balance").then(({ data }) => {
      dispatch({
        type: PlaidActionTypes.GET_BANK_INFO,
        payload: data.accounts
      });
    })
  }
}
