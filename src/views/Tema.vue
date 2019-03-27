<template>
  <el-card>
    <el-tag type="success">{{ tema.Course.Name | capitalize}}</el-tag>
    <h1 class="has-text-centered">{{ tema.Title }}</h1>
    <div v-html="tema.Description" class="has-text-centered"></div>
  </el-card>
</template>

<script>
import { getCourseById } from "@/services/course";

export default {
  name: "Tema",
  created() {
    if (!this.tema) {
      this.$router.push("/404");
    }
  },
  beforeMount() {
    this.callDispatcher();
  },
  computed: {
    tema() {
      return this.$store.state.tema;
    }
  },
  methods: {
    callDispatcher() {
      this.$store.dispatch("temaByIdByCourse", {
        courseId: this.$route.params.courseId,
        temaId: this.$route.params.temaId
      });
    },
    handleNodeClick(tema) {
      this.$router.push(`/course/${this.course.Id}/tema/${tema.Id}`);
    }
  }
};
</script>
