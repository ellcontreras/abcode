<template>
  <div class="my-footer">
    <el-row>
      <el-col :span="8">
        <p>
          <router-link to="/">Inicio</router-link>
        </p>
        <p>
          <router-link to="/about">Acerca</router-link>
        </p>
      </el-col>
      <el-col :span="8">
        <div>
          <p>
            <router-link to="/courses">Cursos</router-link>
          </p>
          <p v-for="course in $store.getters.allCourses" :key="course.Id">
            <router-link :to="`/course/${course.Id}`">{{ course.Name }}</router-link>
          </p>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="has-text-centered">
          <h1>{{ $store.state.title }}</h1>
        </div>
      </el-col>
    </el-row>
    <div class="has-text-centered">
      <p>
        <strong>{{ $store.state.title }}</strong> by
        <a href="https://github.com/Obsinqsob01" target="__blank">Luis Contreras</a>. The source code is licensed
        <a
          href="http://opensource.org/licenses/mit-license.php"
          target="__blank"
        >MIT</a>.
      </p>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #4681df !important;
}
</style>


