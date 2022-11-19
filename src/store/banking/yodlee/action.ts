import { ThunkAction } from "redux-thunk";
import { ActionCreator, Action, Dispatch } from "redux";
import { ApplicationState } from "../../index";
import axios from "../../../util/api";
import { YodleeActionTypes, BankResult, YodleeFirstStepResult } from "./types";
import qs from "qs";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const generateToken: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    let instance = {...axios};
    delete instance.defaults.headers.common['Authorization'];

    let yodleeTokenUrl = "https://sandbox.api.yodlee.com/ysl/auth/token";

    let params = qs.stringify({
      clientId: 'qf8sixGcLevuetd7Ly5WGAI2mk7rIL5l', //// Client Id
      secret : 'qsc67QKsqJGPooLC'                   //// Secret
    });
    
    let config = {
      headers: {
        'Api-Version':  '1.1',        
        'loginName': 'sbMem61e83c41d142c1', //// Test User Name
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }    
    return await instance.post(yodleeTokenUrl, params, config)
    .then(({data}) => {
      if(data) {
        dispatch({
          type: YodleeActionTypes.SET_LINK_TOKEN,
          payload:data
        });
      }
    })
    .catch((e) => {
      return dispatch({
        type: YodleeActionTypes.REQUEST_ERROR,
        payload: e
      });
    });

  }
}

export const yodleeSuccess: AppThunk =  (data: YodleeFirstStepResult, token: string) => {
  
    return (dispatch: Dispatch) => {
      let instance = {...axios};
      // delete instance.defaults.headers.common['Authorization'];

      
      let yodleeTokenUrl = `https://sandbox.api.yodlee.com/ysl/accounts?providerAccountId=${data.providerAccountId}&include=fullAccountNumber,holder`;
      
      let config = {
        headers: {
          'Api-Version'   : '1.1',        
          'Content-Type'  : 'application/json',
          'Authorization' :  `Bearer ${token}`
        }
      }

      instance.get(yodleeTokenUrl, config)
      .then(({data}) => {
        if(data) {
          data.token = token;
          dispatch({
            type: YodleeActionTypes.ADD_ACCOUNT,
            payload: data
          });
        }
      })
      .catch((e) => {
        return dispatch({
          type: YodleeActionTypes.REQUEST_ERROR,
          payload: e
        });
      });
    }

}

export const addAccount: AppThunk = (data: BankResult) => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: YodleeActionTypes.ADD_ACCOUNT,
      payload: data
    });
  };
}

export const saveTokens: AppThunk = (public_tokens) => {
  return async (dispatch: Dispatch) => {
    return await axios.post("yodlee/set-yodlee-access-token", {public_tokens}).then(({ data }) => {
      dispatch({
        type: YodleeActionTypes.SAVE_ACCESS_TOKEN,
        payload: data
      });
    }).catch((e) => {
      dispatch({
        type: YodleeActionTypes.SAVE_ACCESS_TOKEN,
        payload: e.response
      });
    });
  }
}

export const getBalenceData: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    return await axios.get("yodlee/get-yodlee-balance").then(({ data }) => {
      dispatch({
        type: YodleeActionTypes.GET_BANK_INFO,
        payload: data.accounts
      });
    })
  }
}