<template>
  <div>
    <div class="hero background is-bold" v-if="$route.name === 'home'">
      <div class="hero-head">
        <navbar/>
      </div>
      <div class="hero-body">
        <h1 class="title is-1 has-text-centered has-text-white">Aprende programación desde cero!</h1>
        <p
          class="has-text-centered has-text-white"
        >Selecciona tu ruta de aprendizaje de acuerdo a tu semestre</p>
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
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import { ADD_DAILY_UPDATE, UPDATE_COURSE } from "./store/mutation-types";

export default {
  name: "App",
  components: {
    Home,
    Navbar,
    Footer
  },
  created() {
    this.$store.subscribe(mutation => {
      switch (mutation.type) {
        case ADD_DAILY_UPDATE:
          this.$toastr.success(
            "Se ha agregado una notificación",
            mutation.payload
          );
          break;
        case UPDATE_COURSE:
          this.$toastr.success("El curso se ha guardado correctamente");
          break;
      }
    });
  }
};
</script>

<style>
#title {
  cursor: pointer !important;
}
</style>

