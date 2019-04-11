<template>
  <el-card>
    <h1 class="has-text-centered">{{ category.title }}</h1>

    <div class="has-text-centered">
      <img :src="category.image" alt>
      <h2>{{ category.description }}</h2>

      <div v-for="(course, k) of $store.getters.courseByCategory(category.categoryName)" :key="k">
        <h3 class="course" @click="$router.push(`/course/${course.Id}`)">{{ course.Name }}</h3>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Category",
  computed: {
    category() {
      return this.$store.getters.categoryByName(this.$route.params.name);
    }
  }
};
</script>

<style scoped>
.course {
  cursor: pointer;
}
.course:hover {
  color: #555;
}
</style>

