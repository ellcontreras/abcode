<template>
  <div>
    <h2 class="title is-2 has-text-centered">Agregar nueva lección</h2>

    <el-form>
      <el-form-item label="Title:">
        <el-input v-model="lesson.Name"></el-input>
      </el-form-item>
      <el-form-item>
        <quill-editor v-model="lesson.Content"/>
      </el-form-item>
      <el-form-item label="Curso al que pertenece la lección:">
        <el-select v-model="actualCourse">
          <el-option
            v-for="course in courses"
            :key="course.Id"
            :label="course.Name"
            :value="course.Id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Tema del curso al que pertenece la lección">
        <el-select v-model="actualTema">
          <el-option v-for="tema in temas" :key="tema.Id" :label="tema.Title" :value="tema.Id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Es un quiz?">
        <el-switch v-model="isQuiz"></el-switch>
      </el-form-item>
      <div v-show="isQuiz">
        <h4 class="has-text-centered">Selecciona el tipo de quiz</h4>
        <p>Contenido del quiz</p>
        <el-form-item>
          <quill-editor v-model="quiz.Content"/>
        </el-form-item>
        <el-form-item label="Primer respuesta">
          <el-input v-model="quiz.Answer1"/>
        </el-form-item>
        <el-form-item label="Segunda respuesta">
          <el-input v-model="quiz.Answer2"/>
        </el-form-item>
        <el-form-item label="Tercer respuesta">
          <el-input v-model="quiz.Answer3"/>
        </el-form-item>
        <el-form-item label="Cual es la respuesta correcta?">
          <el-select v-model="quiz.WhichCorrect">
            <el-option :value="1" label="La respuesta 1"></el-option>
            <el-option :value="2" label="La respuesta 2"></el-option>
            <el-option :value="3" label="La respuesta 3"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="handleUpdateLesson()">Guardar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DashboardEditLesson",
  data: () => ({
    isQuiz: false,
    actualCourse: "",
    actualTema: "",
    isQuiz: false,
    answers: [],
    correctAnswer: ""
  }),
  methods: {
    handleUpdateLesson() {
      if (this.isQuiz) {
        this.$store.dispatch("updateLessonWithQuiz", {
          Id: this.lesson.Id,
          name: this.lesson.Name,
          content: this.lesson.Content,
          tema: this.actualTema.toString(),
          whatIs: "quiz",
          quiz: {
            Id: this.quiz.Id.toString(),
            content: this.quiz.Content,
            answer1: this.quiz.Answer1,
            answer2: this.quiz.Answer2,
            answer3: this.quiz.Answer3,
            whichCorrect: this.quiz.WhichCorrect,
            lesson: this.quiz.Lesson.Id.toString()
          }
        });
      } else {
        this.$store.dispatch("updateLesson", {
          Id: this.lesson.Id.toString(),
          name: this.lesson.Name,
          content: this.lesson.Content,
          tema: this.actualTema.toString(),
          whatIs: "content"
        });
      }
    }
  },
  mounted() {
    this.actualTema = this.lesson.Tema.Id;
    this.actualCourse = this.$store.getters.courseById(
      this.lesson.Tema.Course.Id
    ).Id;

    this.$store.dispatch("quizByLessonId", this.$route.params.id);
  },
  beforeMount() {
    this.isQuiz = this.lesson.WhatIs === "quiz";
  },
  computed: {
    lesson() {
      return this.$store.getters.lessonById(this.$route.params.id);
    },
    temas() {
      return this.$store.getters.temaByCourseId(parseInt(this.actualCourse));
    },
    courses() {
      return this.$store.getters.allCourses;
    },
    quiz() {
      return this.$store.state.quiz;
    }
  }
};
</script>

<style scoped>
.color-black {
  color: #444 !important;
}

img {
  width: 10%;
}
</style>
