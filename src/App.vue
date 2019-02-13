<template>
  <div>
    <div class="hero background-gradient is-bold" v-if="$route.name === 'home'">
      <div class="hero-head">
        <navbar/>
      </div>
      <div class="hero-body">
        <h1 class="title is-1 has-text-centered has-text-white">Aprende programación desde cero!</h1>
        <p
          class="has-text-centered has-text-white"
        >Selecciona tu ruta de aprendizaje de acuerdo a tu semestre</p>

        <!-- <div class="columns">
          <div class="column">
            <img src="./assets/c_icon.svg" alt="">
          </div>
          <div class="column">
            <img src="./assets/c_sharp.svg" alt="">
          </div>
          <div class="column">
            <img src="./assets/html_icon.svg" alt="">
          </div>
          <div class="column">
            <img src="./assets/android_icon.svg" alt="">
          </div>
        </div>-->
      </div>
    </div>
    <div v-else>
      <navbar/>
    </div>
    <div :class="{'container is-fluid' : $route.name !== 'home'}">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    Navbar,
    Footer
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

