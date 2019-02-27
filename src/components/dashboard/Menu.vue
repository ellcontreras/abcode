<template>
  <div class="hero is-primary">
    <div class="hero-body">
      <figure class="image container is-128x128">
        <img
          src="https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg"
          alt="profile image"
        >
      </figure>

      <p class="has-text-centered">
        <b>My name</b>
      </p>
      <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
        </ul>
        <p class="menu-label">Courses</p>
        <ul class="menu-list">
          <li>
            <router-link to="/dashboard/courses">Cursos</router-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.menu-label {
  color: whitesmoke !important;
}
</style>