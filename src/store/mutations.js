import router from "../router";

import {
  ADD_DAILY_UPDATE,
  UPDATE_COURSE,
  ALL_COURSES,
  ALL_COURSES_SUCCESS,
  COURSE_BY_ID,
  COURSE_BY_ID_SUCCESS,
  ADD_COURSE,
  ADD_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  REMOVE_COURSE,
  REMOVE_COURSE_SUCCESS
} from "./mutation-types";

export const DailyUpdatesMutations = {
  [ADD_DAILY_UPDATE](state, payload) {
    state.dailyUpdates.push(payload);
  }
};

export const courseMutations = {
  [ALL_COURSES](state) {
    state.showLoader = true;
  },
  [ALL_COURSES_SUCCESS](state, payload) {
    state.showLoader = false;
    state.courses = payload;
  },
  [COURSE_BY_ID](state) {
    state.showLoader = true;
  },
  [COURSE_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;
    state.course = payload;
  },
  [ADD_COURSE]: state => {
    state.showLoader = true;
  },
  [ADD_COURSE_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.courses.push(payload);

    router.push(`/course/${payload.Id}`);
  },
  [UPDATE_COURSE]: state => {
    state.showLoader = true;
  },
  [UPDATE_COURSE_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.courses = state.courses.map(c => {
      if (c.Id === payload.Id) {
        return payload;
      }
      return c;
    });

    router.push(`/course/${payload.id}`);
  },
  [REMOVE_COURSE]: state => {
    state.showLoader = true;
  },
  [REMOVE_COURSE_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    const index = state.courses.findIndex(c => c.Id === payload);
    state.courses.splice(index, 1);
  }
};
