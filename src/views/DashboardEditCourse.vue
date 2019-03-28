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
        <el-button type="primary" @click="handleUpdateCourse()">Actualizar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "DashboardEditCourse",
  data: () => ({
    editor: ClassicEditor
  }),
  created() {
    if (!this.course.Name) {
      this.$store.dispatch("courseById", this.$route.params.id);
    }
  },
  computed: {
    course() {
      return this.$store.getters.courseById(this.$route.params.id);
    }
  },
  methods: {
    handleUpdateCourse() {
      this.$store.dispatch("updateCourse", {
        id: this.course.Id,
        name: this.course.Name,
        description: this.course.Description,
        category: this.course.Category
      });
    }
  }
};
</script>

