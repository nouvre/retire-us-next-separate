import { createSelector } from "reselect";
import { ApplicationState } from '@/store/index';
import { Answer } from "./types";

export const getAnswers = createSelector(
  (state: ApplicationState) => state.auth.user,
  (state: ApplicationState) => state.questions,
  (user, questions) => {
    let data = {} as Answer;
    user?.answers.forEach((item) => data[item.meta_key] = item.meta_value);
    return Object.values(data).length > 0 ? data : { ...questions.answers, step: questions.step } as Answer;
  }
);
