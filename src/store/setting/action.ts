import { ThunkAction } from "redux-thunk";
import { ActionCreator, Action, Dispatch } from "redux";
import { ApplicationState } from "../index";
import { SettingActionTypes } from "./types";
import { Toast } from "@/components/common/notification";
import axios from "../../util/api";
import { CommonActionTypes } from "../common/types";

export type AppThunk = ActionCreator<
    ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const addDataCollectionField: AppThunk = (formdata) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post("data-collection", formdata)
            .then(({ data }) => {
                return dispatch({
                    type: SettingActionTypes.ADD_DATA_COLLECTION_FIELD,
                    payload: data.data,
                });
            });
    };
};
export const getDataCollectionFields: AppThunk = () => {
    return async (dispatch: Dispatch) => {
        return await axios.get("data-collection").then(({ data }) => {
            return dispatch({
                type: SettingActionTypes.GET_DATA_COLLECTION_FIELDS,
                payload: data.dataCollections,
            });
        });
    };
};
export const updateDataCollectionField: AppThunk = (formdata) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .put(`data-collection/${formdata.id}`, formdata)
            .then(({ data }) => {
                return dispatch({
                    type: SettingActionTypes.UPDATE_DATA_COLLECTION_FIELD,
                    payload: data.data,
                });
            });
    };
};
export const deleteDataCollectionField: AppThunk = (id) => {
    return async (dispatch: Dispatch) => {
        return await axios.delete(`data-collection/${id}`).then(({ data }) => {
            return dispatch({
                type: SettingActionTypes.DELETE_DATA_COLLECTION_FIELD,
                payload: id,
            });
        });
    };
};
export const getUsers: AppThunk = () => {
    return async (dispatch: Dispatch) => {
        return await axios.post("/get-users").then(({ data }) => {
            return dispatch({
                type: SettingActionTypes.GET_USERS,
                payload: data.result,
            });
        });
    };
};

export const getAnalyticData: AppThunk = () => {
    return async (dispatch: Dispatch) => {
        console.log(JSON.stringify(axios.defaults.headers.common["Authorization"]))
        return await axios.post("/get-analytic-data").then(({ data }) => {
            return dispatch({
                type: SettingActionTypes.GET_ANALYTIC_DATA,
                payload: data.result,
            });
        });
    };
};
export const getUserDetail: AppThunk = (id) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: CommonActionTypes.FETCH_START });
        return await axios.post(`/user-detail`, { id }).then(({ data }) => {
            dispatch({ type: CommonActionTypes.FETCH_SUCCESS });
            return dispatch({
                type: SettingActionTypes.GET_USER_DETAIL,
                payload: data,
            });
        });
    };
};
export const getOnboardingUserDetail: AppThunk = (id) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/user-detail/onboarding`, { id })
            .then(({ data }) => {
                return dispatch({
                    type: SettingActionTypes.GET_ONBOARDING_USER_DETAIL,
                    payload: data.result,
                });
            });
    };
};

export const getVault: AppThunk = (email) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/user-detail/getVault`, { email })
            .then(({ data }) => {
                console.log("vault=>", data);
                // return dispatch({
                //     type: SettingActionTypes.GET_ONBOARDING_USER_DETAIL,
                //     payload: data.result,
                // });
            });
    };
};

export const getRolloverUserDetail: AppThunk = (id) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/user-detail/rollover`, { id })
            .then(({ data }) => {
                return dispatch({
                    type: SettingActionTypes.GET_ROLLOVER_USER_DETAIL,
                    payload: data.result,
                });
            });
    };
};

export const enableTodoList: AppThunk = (id, enabledIds) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/user-detail/enble-todolist`, { id, enabledIds })
            .then(({ data }) => {
                Toast("", "Updated successfully.", "success");
                return dispatch({
                    type: SettingActionTypes.ENABLETODOLIST,
                    payload: data.result,
                });
            })
            .catch((e) => {
                Toast("", e.response.data.message, "danger");
            });
    };
};

export const changeRep: AppThunk = (id, repId) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/user-detail/chane-rep`, { id, repId })
            .then(({ data }) => {
                Toast("", "Updated successfully.", "success");
                return dispatch({
                    type: SettingActionTypes.CHABGE_REP,
                    payload: data.result,
                });
            })
            .catch((e) => {
                Toast("", e.response.data.message, "danger");
            });
    };
};

export const updataGoal: AppThunk = (id, curValue, goal) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/user-detail/update-goal`, { id, curValue, goal })
            .then(({ data }) => {
                Toast("", "Updated successfully.", "success");
                return dispatch({
                    type: SettingActionTypes.UPADTE_GOAL,
                    payload: data.result,
                });
            })
            .catch((e) => {
                Toast("", e.response.data.message, "danger");
            });
    };
};

export const saveDynamicList: AppThunk = (user_id, lists) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/user-detail/save-dynamic-list`, { user_id, lists })
            .then(({ data }) => {
                Toast("", "Updated successfully.", "success");
                return dispatch({
                    type: SettingActionTypes.SAVE_DYMANIC_LIST,
                    payload: data.result,
                });
            })
            .catch((e) => {
                Toast("", e.response.data.message, "danger");
            });
    };
};

export const removeDynamicList: AppThunk = (id) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/user-detail/remove-dynamic-list`, { id })
            .then(({ data }) => {
                Toast("", "Updated successfully.", "success");
                return dispatch({
                    type: SettingActionTypes.REMOVE_DYMANIC_LIST,
                    payload: id,
                });
            })
            .catch((e) => {
                Toast("", e.response.data.message, "danger");
            });
    };
};

export const updateCheckPointResult: AppThunk = (userId, col, value) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post(`/${userId}/checkpointresult`, { col, value })
            .then(({ data }) => {
                return dispatch({
                    type: SettingActionTypes.CHECK_POINT_RESULTS,
                    payload: data.checkpoint,
                });
            })
            .catch((e) => {
                Toast("", e.response.data.message, "danger");
            });
    };
};
