import { Reducer } from "redux";
import { PlaidState, PlaidActionTypes, PlaidAccount } from "./types";

const plaidLinkToken = ""

const initialState: PlaidState = {
    backend: true,
    linkToken: plaidLinkToken,
    linkTokenError: undefined,
    accessTokens: [],
    tokens: [],
    accounts: [],
    savedAccounts: [],
};

const reducer: Reducer<PlaidState> = (state = initialState, action) => {
    switch (action.type) {
        case PlaidActionTypes.SET_LINK_TOKEN: {
          return { ...state, linkToken: action.payload.data.link_token, linkTokenError: action.payload.error };
        }
        case PlaidActionTypes.SAVE_ACCESS_TOKEN: {
          return { ...state, accessTokens: action.payload.data };
        }
        case PlaidActionTypes.REQUEST_ERROR: {
          return { ...state, backend: false, linkToken: null };
        }
        case PlaidActionTypes.GET_BANK_INFO: {
          return { ...state, savedAccounts: action.payload.map((e: PlaidAccount) => ({ ...e, current: e.balances.current})) };
        }
        case PlaidActionTypes.ADD_PLAID_ACCOUNT: {
          return {...state, tokens: [...state.tokens, action.payload.token ], accounts: [...state.accounts, ...action.payload.accounts ]};
        }
        default: {
            return state;
        }
    }
};

export { reducer as plaidReducer };
