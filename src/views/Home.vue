<template>
  <div>
    <section class="section">
      <div class="container is-fluid">
        <div class="hero">
          <div class="hero-body">
            <h1 class="title is-1 has-text-centered">¿Que puedo aprender?</h1>
            <div class="columns">
              <div class="column">
                <div class="media">
                  <div class="media-left">
                    <img src="../assets/luces.svg" class="image is-96x96" alt>
                  </div>
                  <div class="media-content">
                    <h3 class="subtitle is-3">Fundamentos de Programación</h3>
                    <p>Eres nuevo en la programación? Estas en el lugar indicado, aqui contarás con todo lo necesario para empezar</p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="media">
                  <div class="media-left">
                    <img src="../assets/orientado_objetos.svg" class="image is-96x96" alt>
                  </div>
                  <div class="media-content">
                    <h3 class="subtitle is-3">Programación Orientada a Objetos</h3>
                    <p>Ya conoces los fundamentos? Que tal algo más? Aprende POO!</p>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <br>
            <br>
            <div class="columns">
              <div class="column">
                <div class="media">
                  <div class="media-left">
                    <img src="../assets/desarrollo_web.svg" class="image is-96x96" alt>
                  </div>
                  <div class="media-content">
                    <h3 class="subtitle is-3">Desarrollo Web</h3>
                    <p>Domina HTML5, CSS3 y Javascript para crear hermosos sitios web!</p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="media">
                  <div class="media-left">
                    <img src="../assets/desarrollo_apps.svg" class="image is-96x96" alt>
                  </div>
                  <div class="media-content">
                    <h3 class="subtitle is-3">Desarrollo de Apps</h3>
                    <p>Aprende a desarrollar aplicaciones para dispositivos moviles.</p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="media">
                  <div class="media-left">
                    <img src="../assets/redes.svg" class="image is-96x96" alt>
                  </div>
                  <div class="media-content">
                    <h3 class="subtitle is-3">Servidores</h3>
                    <p>Aprende a trabajar con servidores y administrar redes de computadoras.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero background-gradient-secondary">
        <div class="hero-body">
          <h2 class="subtitle is-2 has-text-centered">Ultimos posts</h2>
          <div class="columns">
            <div class="column">
              <router-link to="/">
                <div class="card">
                  <div class="card-content">
                    <img src="../assets/android_icon.svg" class="image is-128x128" alt>
                    <h4 class="subtitle is-4">Lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ducimus culpa minus doloremque. Saepe magnam obcaecati natus nemo ab neque maiores veritatis! Debitis recusandae laudantium optio cumque adipisci sed eum.</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="column">
              <router-link to="/">
                <div class="card">
                  <div class="card-content">
                    <img src="../assets/c_icon.svg" class="image is-128x128" alt>
                    <h4 class="subtitle is-4">Lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ducimus culpa minus doloremque. Saepe magnam obcaecati natus nemo ab neque maiores veritatis! Debitis recusandae laudantium optio cumque adipisci sed eum.</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="column">
              <router-link to="/">
                <div class="card">
                  <div class="card-content">
                    <img src="../assets/c_sharp.svg" class="image is-128x128" alt>
                    <h4 class="subtitle is-4">Lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ducimus culpa minus doloremque. Saepe magnam obcaecati natus nemo ab neque maiores veritatis! Debitis recusandae laudantium optio cumque adipisci sed eum.</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Footer
  }
};
</script>

