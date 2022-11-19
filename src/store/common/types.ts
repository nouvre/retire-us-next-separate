export enum CommonActionTypes {
    FETCH_START = "FETCH_START",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
}

export interface CommonState {
    pending: boolean;
}
