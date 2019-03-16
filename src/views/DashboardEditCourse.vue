<template>
  <div>
    <h2 class="title is-2 has-text-centered">Editar curso</h2>
    <div class="field">
      <label class="label">Nombre:</label>
      <div class="control">
        <input type="text" v-model="course.Name" class="input">
      </div>
    </div>
    <div class="field">
      <label class="label">Descripción:</label>
      <div class="control">
        <ckeditor :editor="editor" v-model="course.Description" class="color-black"/>
      </div>
    </div>
    <div class="field">
      <label class="label">Categoria:</label>
      <div class="control">
        <div class="select">
          <select v-model="course.Category">
            <option value="fundamentos">Fundamentos de programación</option>
          </select>
        </div>
      </div>
    </div>
    <div class="control">
      <button class="button is-link" @click="handleUpdateCourse()">Actualizar</button>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getCourseById, updateCourse } from "@/services/course";

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

