<template>
  <div class="container">
    <p>
      <b>Da click sobre un curso para ver sus temas y después sus lecciones:</b>
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
          <b>Temas</b>
          <el-collapse accordion>
            <el-collapse-item
              v-for="tema in $store.getters.temaByCourseId(course.Id)"
              :key="tema.Id"
              :title="tema.Title"
            >
              <el-table :data="$store.getters.lessonByTemaId(tema.Id)">
                <el-table-column prop="Id" label="ID"></el-table-column>
                <el-table-column prop="Name" label="Nombre"></el-table-column>
                <el-table-column label="Content">
                  <template slot-scope="scope">
                    <div v-html="scope.row.Content"></div>
                  </template>
                </el-table-column>
                <el-table-column prop="Tema.Title" label="Tema"></el-table-column>
                <el-table-column label="Operaciones">
                  <template slot-scope="scope">
                    <div>
                      <span class="icon" title="Eliminar esta lección">
                        <font-awesome-icon icon="trash" @click="deleteLesson(scope.row.Id)"/>
                      </span>
                      <span class="icon" title="Editar esta lección">
                        <font-awesome-icon
                          icon="pen"
                          @click="$router.push(`/dashboard/lessons/edit/${scope.row.Id}`)"
                        />
                      </span>
                      <span class="icon" title="Ver esta lección">
                        <font-awesome-icon
                          icon="eye"
                          @click="$router.push(`/lesson/${scope.row.Id}`)"
                        />
                      </span>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonList",
  computed: {
    temas() {
      return this.$store.getters.allTemas;
    },
    courses() {
      return this.$store.getters.allCourses;
    },
    lessons() {
      return this.$store.getters.allLessons;
    }
  },
  created() {
    if (this.lessons.length === 0) {
      this.$store.dispatch("allLessons");
    }
  },
  methods: {
    deleteLesson(id) {
      if (confirm("Estas seguro que quieres eliminar la lección?")) {
        this.$store.dispatch("removeLesson", id);
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
