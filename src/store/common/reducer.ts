import { Reducer } from "redux";

import { CommonActionTypes, CommonState } from "./types";

const initialState: CommonState = {
    pending: false,
};

const reducer: Reducer<CommonState> = (state = initialState, action) => {
    switch (action.type) {
        case CommonActionTypes.FETCH_START: {
            return { ...state, pending: true };
        }
        case CommonActionTypes.FETCH_SUCCESS:
        case CommonActionTypes.FETCH_ERROR: {
            return { ...state, pending: false };
        }
        default: {
            return state;
        }
    }
};

export { reducer as commonReducer };
