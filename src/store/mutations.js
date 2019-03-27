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
  REMOVE_COURSE_SUCCESS,
  TEMA_BY_ID_BY_COURSE,
  TEMA_BY_ID_BY_COURSE_SUCCESS,
  ADD_TEMA,
  ADD_TEMA_SUCCESS,
  UPDATE_TEMA,
  UPDATE_TEMA_SUCCESS,
  REMOVE_TEMA_SUCCESS,
  REMOVE_TEMA,
  ALL_TEMAS,
  ALL_TEMAS_SUCCESS,
  ALL_TEMAS_BY_COURSE_ID,
  ALL_TEMAS_BY_COURSE_ID_SUCCESS
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

export const temaMutations = {
  [ALL_TEMAS](state) {
    state.showLoader = true;
  },
  [ALL_TEMAS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.temas = payload;
  },
  [TEMA_BY_ID_BY_COURSE](state) {
    state.showLoader = true;
  },
  [TEMA_BY_ID_BY_COURSE_SUCCESS](state, payload) {
    state.showLoader = false;
    state.tema = payload;
  },
  [ALL_TEMAS_BY_COURSE_ID](state, payload) {
    state.showLoader = true;
  },
  [ALL_TEMAS_BY_COURSE_ID_SUCCESS](state, payload) {
    state.showLoader = false;
    state.temasByCourse = payload;
  },
  [ADD_TEMA]: state => {
    state.showLoader = true;
  },
  [ADD_TEMA_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.temas.push(payload);

    router.push(`/course/${payload.Course.Id}`);
  },
  [UPDATE_TEMA]: state => {
    state.showLoader = true;
  },
  [UPDATE_TEMA_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.temas = state.temas.map(t => {
      if (t.Course.Id === payload.course) {
        return payload;
      }
      return t;
    });

    router.push(`/course/${payload.course}`);
  },
  [REMOVE_TEMA]: state => {
    state.showLoader = true;
  },
  [REMOVE_TEMA_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    const index = state.temas.findIndex(c => c.Id === payload);
    state.temas.splice(index, 1);
  }
};
