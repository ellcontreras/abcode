<template>
  <el-card>
    <el-tag type="success">{{ tema.Course.Name | capitalize}}</el-tag>
    <h1 class="has-text-centered">{{ tema.Title }}</h1>
    <div v-html="tema.Description" class="has-text-centered"></div>
    <div>
      <h2>Temas de este curso:</h2>
      <div v-for="lesson in lessons" :key="lesson.Id">
        <h3 @click="$router.push(`/lesson/${lesson.Id}`)">{{ lesson.Name }}</h3>
      </div>
    </div>
  </el-card>
</template>

<script>
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
    },
    lessons() {
      return this.$store.getters.lessonByTemaId(this.$route.params.temaId);
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
