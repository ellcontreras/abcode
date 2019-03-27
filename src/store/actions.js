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
  REMOVE_COURSE_SUCCESS,
  TEMA_BY_ID_BY_COURSE,
  TEMA_BY_ID_BY_COURSE_SUCCESS,
  ALL_TEMAS,
  ALL_TEMAS_SUCCESS,
  TEMA_BY_ID_SUCCESS,
  TEMA_BY_ID,
  ADD_TEMA,
  ADD_TEMA_SUCCESS,
  UPDATE_TEMA,
  UPDATE_TEMA_SUCCESS,
  REMOVE_TEMA,
  REMOVE_TEMA_SUCCESS,
  ALL_TEMAS_BY_COURSE_ID,
  ALL_TEMAS_BY_COURSE_ID_SUCCESS
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

export const temaActions = {
  allTemas({ commit }) {
    commit(ALL_TEMAS);
    axios.get(`${API_BASE}/tema`).then(res => {
      commit(ALL_TEMAS_SUCCESS, res.data);
    });
  },
  allTemasByCourseId({ commit }, payload) {
    commit(ALL_TEMAS_BY_COURSE_ID);
    axios.get(`${API_BASE}/tema/all/${payload}`).then(res => {
      commit(ALL_TEMAS_BY_COURSE_ID_SUCCESS, res.data);
    });
  },
  temaById({ commit }, payload) {
    commit(TEMA_BY_ID);
    axios.get(`${API_BASE}/tema/${payload}`).then(res => {
      commit(TEMA_BY_ID_SUCCESS, res.data);
    });
  },
  temaByIdByCourse({ commit }, payload) {
    commit(TEMA_BY_ID_BY_COURSE);
    axios
      .get(`${API_BASE}/tema/${payload.courseId}/${payload.id}`)
      .then(res => {
        commit(TEMA_BY_ID_BY_COURSE_SUCCESS, res.data);
      });
  },
  addTema({ commit }, payload) {
    commit(ADD_TEMA);
    axios.post(`${API_BASE}/tema`, payload).then(res => {
      commit(ADD_TEMA_SUCCESS, res.data);
    });
  },
  updateTema({ commit }, payload) {
    commit(UPDATE_TEMA);
    axios.put(`${API_BASE}/tema/${payload.Id}`, payload).then(res => {
      commit(UPDATE_TEMA_SUCCESS, payload);
    });
  },
  removeTema({ commit }, payload) {
    commit(REMOVE_TEMA);
    axios.delete(`${API_BASE}/tema/${payload}`).then(res => {
      commit(REMOVE_TEMA_SUCCESS, payload);
    });
  }
};
