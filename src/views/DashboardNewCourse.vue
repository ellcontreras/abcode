<template>
  <div>
    <h2 class="title is-2 has-text-centered">Agregar nuevo curso</h2>

    <el-form>
      <el-form-item label="Nombre:">
        <el-input v-model="course.Name"></el-input>
      </el-form-item>
      <el-form-item label="Descripción:">
        <ckeditor :editor="editor" v-model="course.Description" class="color-black"/>
      </el-form-item>
      <el-form-item label="Categoría:">
        <el-select v-model="course.Category">
          <el-option label="Fundamentos de programación" value="fundamentos"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSaveCourse()">Guardar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "DashboardNewCourse",
  data: () => ({
    course: [],
    editor: ClassicEditor
  }),
  methods: {
    handleSaveCourse() {
      this.$store.dispatch("addCourse", {
        name: this.course.Name,
        description: this.course.Description,
        category: this.course.Category
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
