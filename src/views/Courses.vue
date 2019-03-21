<template>
  <div>
    <h1 class="has-text-centered">Todos los cursos</h1>

    <el-container>
      <el-card shadow="always" v-for="(category, key) of $store.state.courseCategories" :key="key">
        <img :src="category.image" class="image is-96x96" :alt="category.image">
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>

        <div v-for="(link, k) of category.links" :key="k">
          <router-link :to="`/course/${link}`">{{ link }}</router-link>
        </div>
      </el-card>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Courses"
};
</script>


<style scoped>
a {
  color: #4681df !important;
}

a:hover {
  color: #444 !important;
}
img {
  width: 20%;
}
</style>
