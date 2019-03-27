<template>
  <el-card>
    <el-tag type="danger">{{ course.Category | capitalize}}</el-tag>
    <h1 class="has-text-centered">{{ course.Name }}</h1>
    <div v-html="course.Description" class="has-text-centered"></div>
    <br>
    <h3 class="has-text-centered">Temas del curso</h3>
    <el-tree :data="temas" :props="{label: 'Title'}" @node-click="handleNodeClick"></el-tree>
    <div class="has-text-centered">
      <el-button type="primary" plain>Tomar este curso</el-button>
    </div>
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

    if (!this.temas) {
      this.$store.dispatch("allTemas");
      this.$store.dispatch("allTemasByCourseId", this.$route.params.id);
    }
  },
  computed: {
    course() {
      return this.$store.getters.courseById(this.$route.params.id);
    },
    temas() {
      return this.$store.getters.temaByCourseId(this.$route.params.id);
    }
  },
  methods: {
    handleNodeClick(tema) {
      this.$router.push(`/course/${this.course.Id}/tema/${tema.Id}`);
    }
  }
};
</script>
