<template>
  <div>
    <div class="hero background-gradient-secondary">
      <div class="hero-body">
        <h1 class="title is-1 has-text-centered has-text-white">Todos los cursos</h1>
      </div>
    </div>

    <div class="container">
      <div class="hero" v-for="(course, key) of $store.state.courses" :key="key">
        <div class="hero-body">
          <div class="media">
            <div class="media-left">
              <img :src="course.image" class="image is-96x96" :alt="course.image">
            </div>
            <div class="media-content">
              <h3 class="subtitle is-3">{{ course.title }}</h3>
              <p>{{ course.description }}</p>
            </div>
          </div>
        </div>
        <div class="hero-foot">
          <div class="columns">
            <div v-for="(link, k) of course.links" :key="k">
              <div class="column">
                <router-link :to="`/course/${link}`">{{ link }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
  data: () => ({
    prefix: "../static/"
  })
};
</script>


<style scoped>
a {
  color: #4681df !important;
}

a:hover {
  color: #444 !important;
}
</style>
