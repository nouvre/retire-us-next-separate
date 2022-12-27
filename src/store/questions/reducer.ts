import { Reducer } from "redux";
import { QuestionState, Answer, QuestionActionTypes } from "./types";

const initialState: QuestionState = {
  answers: {} as Answer,
  step: 0,
};

const reducer: Reducer<QuestionState> = (state = initialState, action) => {
  switch (action.type) {
    case QuestionActionTypes.GET_QUESTIONNARE: {
      return {
        ...state,
        answers: action.payload.data,
        step: action.payload.step,
      };
    }
    case QuestionActionTypes.UPDATE_QUESTION: {
      return {
        ...state,
        answers: action.payload.data,
        step: action.payload.step,
      };
    }
    case QuestionActionTypes.CHANGE_STEP: {
      return { ...state, step: action.payload };
    }
    case QuestionActionTypes.REMOVE_QUESTIONNARE: {
      return {
        ...state,
        answers: {},
        step: 0,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as questionReducer };
