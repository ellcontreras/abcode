import { ADD_DAILY_UPDATE, UPDATE_COURSE } from "./mutation-types";

export const DailyUpdatesMutations = {
  [ADD_DAILY_UPDATE](state, payload) {
    state.dailyUpdates.push(payload);
  }
};
