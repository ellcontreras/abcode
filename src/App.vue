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
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import {
  ADD_DAILY_UPDATE,
  UPDATE_COURSE,
  ADD_COURSE_SUCCESS,
  REMOVE_COURSE_SUCCESS
} from "./store/mutation-types";

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
        case ADD_COURSE_SUCCESS:
          this.$toastr.success("Curso agregado");
          break;
        case UPDATE_COURSE:
          this.$toastr.success("El curso se ha guardado correctamente");
          break;
        case REMOVE_COURSE_SUCCESS:
          this.$toastr.info("El curso se ha borrado con exito");
          break;
      }
    });
  },
  computed: {
    showLoader () {
      return this.$store.state.showLoader
    }
  }
};
</script>

<style>
#title {
  cursor: pointer !important;
}
.overlay {
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .loading-spinner {
    position : absolute;
    top      : 50%;
    left     : 50%;
    -webkit-transform : translateX(-50%) translateY(-50%);
    -moz-transform : translateX(-50%) translateY(-50%);
    transform : translateX(-50%) translateY(-50%);
  }

  .dot {
    background    : black;
    border-radius : 100%;
    color         : white;
    height        : 8px;
    line-height   : 8px;
    text-align    : center;
    width         : 8px;
  }

  .dotOne {
    -webkit-animation : dotOneKeyframes 5s ease  infinite;
    background        : #20a8d8;
    position          : absolute;
    top               : 0;
    left              : 0;
  }

  .dotTwo {
    -webkit-animation : dotTwoKeyframes 5s ease 0.4166666666666s infinite;
    background        : #20a8d8;
    position          : absolute;
    top               : 0;
    left              : 14px;
  }

  .dotThree {
    -webkit-animation : dotThreeKeyframes 5s ease 0.83333333333s infinite;
    background        : #20a8d8;
    position          : absolute;
    top               : 14px;
    left              : 14px;
  }

  @-webkit-keyframes dotOneKeyframes {
    0% {
      top  : 0;
      left : 0;
    }
    8.3333333333% {
      top  : 14px;
      left : 0;
    }
    16.6666666666% {

    }
    25% {
      top  : 14px;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 14px;
    }
    41.6666666666% {

    }
    50% {
      top  : 14px;
      left : 14px;
    }
    58.3333333333% {
      top  : 0;
      left : 14px;
    }
    66.6666666666% {

    }
    75% {
      top  : 0;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 0;
    }
    91.6666666666% {

    }
    100% {

    }
  }


  @-webkit-keyframes dotTwoKeyframes {
    0% {
      top  : 0;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 0;
    }
    16.6666666666% {

    }
    25% {
      top  : 0;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 0;
    }
    41.6666666666% {

    }
    50% {
      top  : 14px;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 14px;
    }
    66.6666666666% {

    }
    75% {
      top  : 14px;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 14px;
    }
    91.6666666666% {

    }
    100% {

    }
  }

  @-webkit-keyframes dotThreeKeyframes {
    0% {
      top  : 14px;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 14px;
    }
    16.6666666666% {

    }
    25% {
      top  : 0;
      left : 14px;
    }
    33.3333333333% {
      top  : 0;
      left : 0;
    }
    41.6666666666% {

    }
    50% {
      top  : 0;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 0;
    }
    66.6666666666% {

    }
    75% {
      top  : 14px;
      left : 0;
    }
    83.3333333333% {
      top  : 14px;
      left : 14px;
    }
    91.6666666666% {

    }
    100% {

    }
  }
</style>

