<template>
  <div class="section">
    <span class="tag is-link">{{ course.Category }}</span>
    <h2 class="subtitle is-2  has-text-center">{{ course.Name }}</h2>
    <div v-html="course.Description"></div>
  </div>
</template>

<script>
import { getCourseById } from "@/services/course";

export default {
  name: "Course",
  data: () => ({
    course: []
  }),
  beforeMount() {
    getCourseById(this.$route.params.id)
      .then(res => {
        this.course = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
