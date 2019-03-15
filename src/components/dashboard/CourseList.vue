<template>
  <div class="container">
    <p>
      <b>Selecciona un curso para editarlo:</b>
    </p>
    <br>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Categoria</th>
            <th>Operaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course of courses" :key="course.Id">
            <th>{{ course.Id }}</th>
            <th>{{ course.Name }}</th>
            <th v-html="course.Description"></th>
            <th>{{ course.Category }}</th>
            <th>
              <div class="has-text-centered">
                <span class="icon">
                  <font-awesome-icon icon="trash" @click="deleteCourse(course.Id)"/>
                </span>
                <span class="icon">
                  <font-awesome-icon
                    icon="pen"
                    @click="$router.push(`/dashboard/courses/edit/${course.Id}`)"
                  />
                </span>
                <span class="icon">
                  <font-awesome-icon icon="eye" @click="$router.push(`/course/${course.Id}`)"/>
                </span>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getAllCourses, deleteCourseById } from "@/services/course";

export default {
  name: "CourseList",
  data: () => ({
    courses: []
  }),
  beforeMount() {
    this.setCourses();
  },
  methods: {
    setCourses() {
      getAllCourses()
        .then(res => {
          this.courses = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteCourse(id) {
      if (confirm("Estas seguro que quieres eliminar el curso?")) {
        deleteCourseById(id)
          .then(res => {
            this.setCourses();
          })
          .catch(err => {
            this.$toastr.error("Ocurrió un error", err);
          });
      }
    }
  }
};
</script>


<style scoped>
a {
  color: #555 !important;
}
a:hover {
  color: #444 !important;
}
</style>

