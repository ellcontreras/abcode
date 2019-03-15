import axios from "axios";

export function getAllCourses() {
  return axios.get("http://localhost:8081/v1/course");
}

export function getCourseById(id) {
  return axios.get(`http://localhost:8081/v1/course/${id}`);
}

export function saveCourse(params) {
  return axios.post("http://localhost:8081/v1/course", params);
}

export function updateCourse(params, id) {
  return axios.put(`http://localhost:8081/v1/course/${id}`, params);
}

export function deleteCourseById(id) {
  return axios.delete(`http://localhost:8081/v1/course/${id}`);
}
