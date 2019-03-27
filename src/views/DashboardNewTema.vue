<template>
  <div>
    <h2 class="title is-2 has-text-centered">Agregar nuevo tema</h2>

    <el-form>
      <el-form-item label="Title:">
        <el-input v-model="tema.Title"></el-input>
      </el-form-item>
      <el-form-item label="Descripción:">
        <ckeditor :editor="editor" v-model="tema.Description" class="color-black"/>
      </el-form-item>
      <el-form-item label="Curso al que pertenece el tema:">
        <el-select v-model="tema.CourseId">
          <el-option
            v-for="course in $store.getters.allCourses"
            :key="course.Id"
            :label="course.Name"
            :value="course.Id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSaveTema()">Guardar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { saveCourse } from "@/services/course";

export default {
  name: "DashboardNewCourse",
  data: () => ({
    tema: [],
    editor: ClassicEditor
  }),
  methods: {
    handleSaveTema() {
      this.$store.dispatch("addTema", {
        title: this.tema.Title,
        description: this.tema.Description,
        course: this.tema.CourseId.toString()
      });
    }
  }
};
</script>

<style scoped>
.color-black {
  color: #444 !important;
}
</style>
