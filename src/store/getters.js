export const courseGetters = {
  allCourses: state => {
    return state.courses;
  },
  courseById: (state, getters) => id => {
    if (getters.allCourses.length !== 0) {
      return getters.allCourses.find(c => c.Id === parseInt(id));
    } else {
      return state.course;
    }
  }
};

export const temaGetters = {
  allTemas: state => {
    return state.temas;
  },
  temaById: (state, getters) => id => {
    if (getters.allTemas.length !== 0) {
      return getters.allTemas.find(t => t.Id === parseInt(id));
    } else {
      return state.tema;
    }
  },
  temaByCourseId: (state, getters) => courseId => {
    if (getters.allTemas.length !== 0) {
      return getters.allTemas.filter(t => t.Course.Id === parseInt(courseId));
    } else {
      return state.temasByCourse;
    }
  }
};
