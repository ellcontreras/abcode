<template>
  <div class="section">
    <span class="tag is-link">{{ course.Category }}</span>
    <h2 class="subtitle is-2 has-text-center">{{ course.Name }}</h2>
    <div v-html="course.Description"></div>
  </div>
</template>

<script>
import { getCourseById } from "@/services/course";

export default {
  name: "Course",
  created() {
    if (!this.course.Name) {
      this.$store.dispatch("courseById", this.$route.params.id);
    }
  },
  computed: {
    course() {
      return this.$store.getters.courseById(this.$route.params.id);
    }
  }
};
</script>
