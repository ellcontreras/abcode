<template>
  <div class="container">
    <p>
      <b>Da click sobre un curso para ver sus temas temas:</b>
    </p>
    <br>
    <div class="container">
      <!-- <el-tree :data="courses" :props="{label: 'Name'}" @node-click="handleNodeClick"></el-tree> -->

      <el-collapse accordion>
        <el-collapse-item
          v-for="course in courses"
          :key="course.Id"
          :title="`Curso de ${course.Name}`"
        >
          <el-table :data="$store.getters.temaByCourseId(course.Id)">
            <el-table-column prop="Id" label="ID"></el-table-column>
            <el-table-column prop="Title" label="Nombre"></el-table-column>
            <el-table-column label="Descripción">
              <template slot-scope="scope">
                <div v-html="scope.row.Description"></div>
              </template>
            </el-table-column>
            <el-table-column prop="Course.Name" label="Curso"></el-table-column>
            <el-table-column label="Operaciones">
              <template slot-scope="scope">
                <div>
                  <span class="icon" title="Eliminar este tema">
                    <font-awesome-icon icon="trash" @click="deleteTema(scope.row.Id)"/>
                  </span>
                  <span class="icon" title="Editar este tema">
                    <font-awesome-icon
                      icon="pen"
                      @click="$router.push(`/dashboard/temas/edit/${scope.row.Id}`)"
                    />
                  </span>
                  <span class="icon" title="Ver este curso">
                    <font-awesome-icon
                      icon="eye"
                      @click="$router.push(`/course/${scope.row.Course.Id}/tema/${scope.row.Id}`)"
                    />
                  </span>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  computed: {
    temas() {
      return this.$store.getters.allTemas;
    },
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
    deleteTema(id) {
      if (confirm("Estas seguro que quieres eliminar el tema?")) {
        this.$store.dispatch("removeTema", id);
      }
    },
    handleNodeClick(e) {
      console.log(e);
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
