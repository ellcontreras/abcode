<template>
  <el-card>
    <el-tag type="warning">Lección</el-tag>
    <h2 class="has-text-centered">{{ lesson.Name }}</h2>
    <div v-html="lesson.Content" class="has-text-centered"></div>
  </el-card>
</template>

<script>
export default {
  name: "Lesson",
  computed: {
    lesson() {
      return this.$store.getters.lessonById(this.$route.params.id);
    }
  }
};
</script>

