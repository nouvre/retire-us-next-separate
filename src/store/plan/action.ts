import { ThunkAction } from "redux-thunk";
import { ActionCreator, Action, Dispatch } from "redux";
import { ApplicationState } from "../index";
import { PlanActionTypes } from "./types";
import { Toast } from "@/components/common/notification";
import axios from "@/util/api";

export type AppThunk = ActionCreator<
    ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const getPlans: AppThunk = () => {
    return async (dispatch: Dispatch) => {
        return await axios.get("plans").then((response) => {
            return dispatch({
                type: PlanActionTypes.GET_PLANS,
                payload: response.data,
            });
        });
    };
};

export const addPlan: AppThunk = (data) => {
    return async (dispatch: Dispatch) => {
        return await axios.post("plans", data).then(({ data }) => {
            Toast("", "Succesfully add the plan", "success");
            return dispatch({
                type: PlanActionTypes.ADD_PLAN,
                payload: data.data,
            });
        });
    };
};

export const updatePlan: AppThunk = (data) => {
    return async (dispatch: Dispatch) => {
        return await axios.put(`plans/${data.id}`, data).then(({ data }) => {
            Toast("", "Succesfully update the plan", "success");
            return dispatch({
                type: PlanActionTypes.EDIT_PLAN,
                payload: data.data,
            });
        });
    };
};

export const deletePlan: AppThunk = (id) => {
    return async (dispatch: Dispatch) => {
        return await axios.delete(`plans/${id}`).then(() => {
            Toast("", "Succesfully delete the plan", "success");
            return dispatch({
                type: PlanActionTypes.DELETE_PLAN,
                payload: id,
            });
        });
    };
};

export const storePlanToLocal: AppThunk = (plan) => {
    return (dispatch: Dispatch) => {
        // localStorage.setItem('selected_plan', JSON.stringify(plan));
        // localStorage.removeItem("selected_answers");
        // localStorage.removeItem("question_step");
        return dispatch({
            type: PlanActionTypes.STORE_PLAN_TO_LOCAL,
            payload: plan,
        });
    };
};
