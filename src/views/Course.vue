<template>
  <el-card>
    <el-tag type="danger">{{ course.Category | capitalize}}</el-tag>
    <h1 class="has-text-centered">{{ course.Name }}</h1>
    <div v-html="course.Description" class="has-text-centered"></div>
  </el-card>
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
