<template>
  <div>
    <el-container>
      <el-main>
        <el-card shadow="always">
          <el-row type="flex">
            <el-col center>
              <div class="has-text-centered">
                <img src="../static/luces.svg" alt>
                <h1>Fundamentos de programación</h1>
                <p>Vas empezando? Los fundamentos serán geniales para ti</p>
              </div>
            </el-col>
            <el-col>
              <div class="has-text-centered">
                <img src="../static/orientado_objetos.svg" alt>
                <h1>Programación Orientada a Objetos</h1>
                <p>Ya eres más avanzado, prueba con POO</p>
              </div>
            </el-col>
            <el-col>
              <div class="has-text-centered">
                <img src="../static/desarrollo_web.svg" alt>
                <h1>Desarrollo web</h1>
                <p>Te gustaría aprender a desarrollar sitios web</p>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col>
              <div class="has-text-centered">
                <img src="../static/desarrollo_apps.svg" alt>
                <h1>Desarrollo Movil</h1>
                <p>Aprende a hacer aplicaciones para telefonos celulares</p>
              </div>
            </el-col>
            <el-col>
              <div class="has-text-centered">
                <img src="../static/redes.svg" alt>
                <h1>Servidores y Redes</h1>
                <p>Aprende sobre servidores y redes</p>
              </div>
            </el-col>
          </el-row>
          <div class="has-text-centered">
            <el-button type="primary" plain round @click="$router.push('/courses')">Explorar Cursos</el-button>
          </div>
        </el-card>
      </el-main>
    </el-container>
    <el-container>
      <el-main v-if="$store.state.courses.length > 0">
        <h1 class="has-text-centered">Ultimos cursos</h1>
        <el-row class="has-text-centered" type="flex">
          <el-col v-for="(course, k) in (0,3)" :key="k">
            <el-card class="box-card">
              <h3>{{ $store.state.courses[k].Name }}</h3>
              <p v-html="$store.state.courses[k].Description"></p>
              <el-button>Comenzar curso</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-main v-else>
        <h1 class="has-text-centered">No hay cursos disponibles aún</h1>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.$store.dispatch("allCourses");
  }
};
</script>

<style scoped>
img {
  width: 100px;
}
.box-card {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}
</style>

