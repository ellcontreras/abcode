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
