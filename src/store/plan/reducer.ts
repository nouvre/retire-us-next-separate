import { Reducer } from "redux";

import { PlanState, PlanActionTypes } from "./types";
import { QuestionActionTypes } from "../questions/types";

let plan = null;

const initialState: PlanState = {
    plans: [],
    selectedPlan: plan,
};

const reducer: Reducer<PlanState> = (state = initialState, action) => {
    switch (action.type) {
        case PlanActionTypes.GET_PLANS: {
            return { ...state, plans: action.payload.plans };
        }
        case PlanActionTypes.ADD_PLAN: {
            return { ...state, plans: [...state.plans, action.payload] };
        }
        case PlanActionTypes.EDIT_PLAN: {
            return {
                ...state,
                plans: state.plans.map((e) =>
                    e.id === action.payload.id ? action.payload : e
                ),
            };
        }
        case PlanActionTypes.DELETE_PLAN: {
            return {
                ...state,
                plans: state.plans.filter((e) => e.id !== action.payload),
            };
        }
        case PlanActionTypes.STORE_PLAN_TO_LOCAL: {
            return {
                ...state,
                selectedPlan: action.payload,
            };
        }
        case QuestionActionTypes.SELECT_ANSWER: {
            return {
                ...state,
                selectedPlan: null,
            };
        }
        default: {
            return state;
        }
    }
};

export { reducer as planReducer };
