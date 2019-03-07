<template>
  <div class="container">
    <p>
      <b>Selecciona un curso para editarlo:</b>
    </p>
    <br>
    <div v-for="(course, key) of $store.getters.coursesPaginated" :key="key" class="columns">
      <div
        v-for="(c, k) of course"
        :key="k"
        class="column hero"
        :class="$store.getters.categoryColor(c.category).color"
      >
        <router-link :to="`/dashboard/course/edit/${c.id}`">
          <div class="hero-body">
            <h3 class="subtitle is-3 has-text-centered">{{ c.name }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  margin: 0.5em;
}
</style>

