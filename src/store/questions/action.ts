import { ThunkAction } from "redux-thunk";
import { ActionCreator, Action, Dispatch } from "redux";
import { ApplicationState } from "../index";
import { Answer, QuestionActionTypes } from "./types";
import { AuthActionTypes } from "../auth/types";
import axios from "../../util/api";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const getQuestionnare: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    return await axios.post("auth/questionnaire").then(({ data }) => {
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
  iUserId: number,
  is_done?: boolean
) => {
  return async (dispatch: Dispatch) => {
    console.log(iUserId)
    if (!iUserId) {
      axios.post("auth/update-questionnaire", { ...data, step: step });
    } else {
      axios.post(`intro/${iUserId}/answer`, {
        ...data,
        step,
        is_done,
      });
      dispatch({ type: AuthActionTypes.REQUEST_DONE });
    }
    return dispatch({
      type: QuestionActionTypes.UPDATE_QUESTION,
      payload: { data: data, step: step },
    });
  };
};

export const changeStep: AppThunk = (step: number, isLoggedIn: boolean) => {
  return async (dispatch: Dispatch) => {
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
    return await axios.post("auth/finish-questionnaire").then(({ data }) => {
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
