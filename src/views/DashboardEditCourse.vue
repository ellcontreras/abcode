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
        <textarea type="text" v-model="course.Description" class="textarea"></textarea>
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
      <button class="button is-link">Actualizar</button>
    </div>
  </div>
</template>

<script>
import { getCourseById } from "@/services/course";

export default {
  name: "DashboardEditCourse",
  data: () => ({
    course: []
  }),
  beforeMount() {
    getCourseById(this.$route.params.id)
      .then(res => {
        this.course = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

