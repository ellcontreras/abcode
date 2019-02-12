<template>
  <div>
    <div class="navbar is-primary">
      <div class="navbar-brand" @click="$router.push('/')">
        <h3 id="title" class="subtitle is-3 has-text-white navbar-item">{{ $store.state.title }}</h3>
      </div>
    </div>
    <div class="container">
      <Home/>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
#title {
  cursor: pointer !important;
}
</style>

