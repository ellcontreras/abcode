<template>
  <div>
    <h2 class="title is-2 has-text-centered">Agregar nuevo curso</h2>

    <el-form>
      <el-form-item label="Nombre:">
        <el-input v-model="course.Name"></el-input>
      </el-form-item>
      <quill-editor v-model="course.Description"/>
      <el-form-item label="Categoría:">
        <el-select v-model="course.Category">
          <el-option
            v-for="category in $store.getters.allCategories"
            :key="category.title"
            :label="category.title"
            :value="category.categoryName"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSaveCourse()">Guardar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DashboardNewCourse",
  data: () => ({
    course: []
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
