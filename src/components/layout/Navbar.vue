<template>
  <div class="navbar" :class="{'margin-bottom' : $route.name !== 'home'}">
    <div class="navbar-brand" @click="$router.push({name: 'home'})">
      <h3 id="title" class="subtitle is-3 has-text-white navbar-item">{{ $store.state.title }}</h3>
    </div>
    <div class="navbar-end">
      <div class="navbar-menu">
        <div class="navbar-item">
          <router-link to="/courses">Cursos</router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/about">Acerca</router-link>
        </div>
        <div class="navbar-item">
          <router-link to="dashboard">Dashboard</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
