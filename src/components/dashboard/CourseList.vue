<template>
  <div class="container">
    <p>
      <b>Selecciona un curso para editarlo:</b>
    </p>
    <br>
    <div class="container">
      <el-table :data="courses">
        <el-table-column prop="Id" label="ID"></el-table-column>
        <el-table-column prop="Name" label="Nombre"></el-table-column>
        <el-table-column label="Descripción">
          <template slot-scope="scope">
            <div v-html="scope.row.Description"></div>
          </template>
        </el-table-column>
        <el-table-column prop="Category" label="Categoria"></el-table-column>
        <el-table-column label="Operaciones">
          <template slot-scope="scope">
            <div>
              <span class="icon" title="Eliminar este curso">
                <font-awesome-icon icon="trash" @click="deleteCourse(scope.row.Id)"/>
              </span>
              <span class="icon" title="Editar este curso">
                <font-awesome-icon
                  icon="pen"
                  @click="$router.push(`/dashboard/courses/edit/${scope.row.Id}`)"
                />
              </span>
              <span class="icon" title="Ver este curso">
                <font-awesome-icon icon="eye" @click="$router.push(`/course/${scope.row.Id}`)"/>
              </span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  computed: {
    courses() {
      return this.$store.getters.allCourses;
    }
  },
  created() {
    if (this.courses.length === 0) {
      this.$store.dispatch("allCourses");
    }
  },
  methods: {
    deleteCourse(id) {
      if (confirm("Estas seguro que quieres eliminar el curso?")) {
        this.$store.dispatch("removeCourse", id);
      }
    }
  }
};
</script>


<style scoped>
a {
  color: #555 !important;
}
a:hover {
  color: #444 !important;
}
svg {
  cursor: pointer;
}
</style>
