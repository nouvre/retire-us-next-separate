import { ThunkAction } from "redux-thunk";
import { ActionCreator, Action, Dispatch } from "redux";
import { ApplicationState } from "../index";
import { Answer, QuestionActionTypes } from "./types";
import { AuthActionTypes } from "../auth/types";
import axios from "@/util/api";

export type AppThunk = ActionCreator<
    ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const getQuestionnare: AppThunk = () => {
    return async (dispatch: Dispatch) => {
        return await axios.post("auth/questionnaire").then(({ data }) => {
            // localStorage.setItem("question", JSON.stringify(data.data));
            // localStorage.setItem("question_step", data.step);
            return dispatch({
                type: QuestionActionTypes.GET_QUESTIONNARE,
                payload: data,
            });
        });
    };
};

export const updateQuestionnare: AppThunk = (
    data: Answer,
    step: number,
    isLoggedIn: boolean,
    is_done?: boolean
) => {
    return async (dispatch: Dispatch) => {
        // localStorage.setItem("question", JSON.stringify(data || {}));
        // localStorage.setItem("question_step", step.toString());
        const iUserId = 0
        // localStorage.getItem("intro_user_id");
        if (isLoggedIn) {
            axios.post("auth/update-questionnaire", { ...data, step: step });
        } else {
            if (iUserId) {
                axios.post(`intro/${iUserId}/answer`, {
                    ...data,
                    step,
                    is_done,
                });
                dispatch({ type: AuthActionTypes.REQUEST_DONE });
            }
        }
        return dispatch({
            type: QuestionActionTypes.UPDATE_QUESTION,
            payload: { data: data, step: step },
        });
    };
};

export const changeStep: AppThunk = (step: number, isLoggedIn: boolean) => {
    return async (dispatch: Dispatch) => {
        // localStorage.setItem("question_step", step.toString());
        if (isLoggedIn) {
            axios.post("auth/update-questionnaire-step", { step });
        }
        return dispatch({
            type: QuestionActionTypes.CHANGE_STEP,
            payload: step,
        });
    };
};

export const finishQuestionnare: AppThunk = () => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post("auth/finish-questionnaire")
            .then(({ data }) => {
                // localStorage.setItem("token", data.access_token);
                // localStorage.setItem("user", JSON.stringify(data.user));
                axios.defaults.headers.common.Authorization =
                    "Bearer " + data.access_token;
                return dispatch({
                    type: AuthActionTypes.UPDATE_QUESTIONNARE,
                    payload: data,
                });
            });
    };
};

export const introRegister: AppThunk = (email: string) => {
    return async (dispatch: Dispatch) => {
        return await axios
            .post("intro/register", { email })
            .then(({ data }) => {
                // localStorage.clear();
                // localStorage.setItem(
                //     "intro_user_id",
                //     JSON.stringify(data.user.id)
                // );
                dispatch({
                    type: QuestionActionTypes.UPDATE_QUESTION,
                    payload: { data: data.answers, step: data.step },
                });

                return dispatch({
                    type: AuthActionTypes.INTRO_USER,
                    payload: data.user,
                });
            })
            .catch((e) => {
                return dispatch({
                    type: AuthActionTypes.REQUEST_ERROR,
                    payload: e.response,
                });
            });
    };
};
