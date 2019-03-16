import axios from "axios";
import { API_BASE } from "../config";
import {
  ALL_COURSES,
  COURSE_BY_ID_SUCCESS,
  ALL_COURSES_SUCCESS,
  COURSE_BY_ID,
  ADD_COURSE,
  ADD_COURSE_SUCCESS,
  UPDATE_COURSE,
  UPDATE_COURSE_SUCCESS,
  REMOVE_COURSE,
  REMOVE_COURSE_SUCCESS
} from "./mutation-types";

export const courseActions = {
  allCourses({ commit }) {
    commit(ALL_COURSES);
    axios.get(`${API_BASE}/course`).then(res => {
      commit(ALL_COURSES_SUCCESS, res.data);
    });
  },
  courseById({ commit }, payload) {
    commit(COURSE_BY_ID);
    axios.get(`${API_BASE}/course/${payload}`).then(res => {
      commit(COURSE_BY_ID_SUCCESS, res.data);
    });
  },
  addCourse({ commit }, payload) {
    commit(ADD_COURSE);
    axios.post(`${API_BASE}/course`, payload).then(res => {
      commit(ADD_COURSE_SUCCESS, res.data);
    });
  },
  updateCourse({ commit }, payload) {
    commit(UPDATE_COURSE);
    axios.put(`${API_BASE}/course/${payload.Id}`, payload).then(res => {
      commit(UPDATE_COURSE_SUCCESS, payload);
    });
  },
  removeCourse({ commit }, payload) {
    commit(REMOVE_COURSE);
    axios.delete(`${API_BASE}/course/${payload}`).then(res => {
      commit(REMOVE_COURSE_SUCCESS, payload);
    });
  }
};
