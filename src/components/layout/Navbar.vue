<template>
  <el-menu mode="horizontal" background-color="#409EFF" text-color="#FFFFFF">
    <el-menu-item @click="$router.push({name: 'home'})">
      <router-link to="/">{{ $store.state.title }}</router-link>
    </el-menu-item>
    <el-menu-item @click="$router.push('/courses')">
      <router-link to="/courses">Cursos</router-link>
    </el-menu-item>
    <el-menu-item @click="$router.push('/about')">
      <router-link to="/about">Acerca</router-link>
    </el-menu-item>
    <el-menu-item @click="$router.push('/dashboard')">
      <router-link to="/dashboard">Dashboard</router-link>
    </el-menu-item>
  </el-menu>
</template>
