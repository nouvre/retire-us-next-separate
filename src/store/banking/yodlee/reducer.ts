import { Reducer } from "redux";
import { YodleeState, YodleeActionTypes, YodleeAccount } from "./types";

const yodleeLinkToken = "";

const initialState: YodleeState = {
    backend: true,
    linkToken: yodleeLinkToken,
    linkTokenError: undefined,
    accessTokens: [],
    tokens: [],
    accounts: [],
    savedAccounts: []
};

const reducer: Reducer<YodleeState> = (state = initialState, action) => {
    switch (action.type) {
        case YodleeActionTypes.SET_LINK_TOKEN: {
          return { ...state, linkToken: action.payload.token.accessToken, linkTokenError: action.payload.error };
        }
        case YodleeActionTypes.SAVE_ACCESS_TOKEN: {
          return { ...state, accessTokens: action.payload.data };
        }
        case YodleeActionTypes.REQUEST_ERROR: {
          return { ...state, backend: false, linkToken: null };
        }
        case YodleeActionTypes.GET_BANK_INFO: {
          return { ...state, savedAccounts: action.payload.map((e: YodleeAccount) => ({ ...e, current: e.balance.amount})) };
        }
        case YodleeActionTypes.ADD_ACCOUNT: {
          return {...state, tokens: [...state.tokens, action.payload.token ], accounts: [...state.accounts, ...action.payload.account ]};
        }

        default: {
            return state;
        }
    }
};

export { reducer as yodleeReducer };
