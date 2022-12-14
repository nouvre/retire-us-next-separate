import { createSelector } from "reselect";
import { ApplicationState } from '@/store/index';

export const getPlanState = createSelector(
  (state: ApplicationState) => state.auth.user,
  (user) => {
    return { sPlan: user?.selected_plan ? true : (user?.current_plan ? true : false), cPlan: user?.current_plan ? true : false };
  }
);
