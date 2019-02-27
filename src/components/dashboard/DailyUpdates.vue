<template>
  <div>
    <h2 class="title is-2 has-text-centered">Dashboard</h2>
    <div class="card">
      <div class="card-content">
        <h3 class="subtitle is-3">Actualizaciones diarias</h3>
        <div id="scroll">
          <div class="card" v-for="(update, key) of $store.state.dailyUpdates" :key="key">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <span
                    class="tag is-black"
                    @click="$store.commit('ADD_DAILY_UPDATE', 'hola');"
                  >Notificación</span>
                  <p>12:05 p.m</p>
                </div>
                <div class="media-content">
                  <router-link :to="`/update/${update}`">{{ update }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #444 !important;
}
a:hover {
  color: #111 !important;
}
#scroll {
  max-height: 292px;
  overflow: auto;
}
</style>

