<template>
  <el-menu mode="vertical" background-color="#304156" text-color="#bfcbd9" class="verticalMenu">
    <div class="has-text-centered">
      <img
        src="https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"
        alt="profile image"
      >
      <p>Name</p>
    </div>
    <router-link to="/dashboard">
      <el-menu-item>Dashboard</el-menu-item>
    </router-link>
    <router-link to="/dashboard/courses">
      <el-menu-item>Cursos</el-menu-item>
    </router-link>
    <router-link to="/dashboard/temas">
      <el-menu-item>Temas</el-menu-item>
    </router-link>
  </el-menu>
</template>

<style scoped>
a {
  color: #bfcbd9;
}
img {
  margin-top: 2em;
  width: 100px;
}
.verticalMenu {
  width: 250px;
  color: #bfcbd9;
}
</style>