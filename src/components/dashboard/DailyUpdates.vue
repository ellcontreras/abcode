<template>
  <div>
    <h2 class="title is-2 has-text-centered">Dashboard</h2>
    <el-table :data="$store.state.dailyUpdates">
      <el-table-column prop="date" label="Fecha" width="200px"></el-table-column>
      <el-table-column prop="content" label="Contenido"></el-table-column>
    </el-table>
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

