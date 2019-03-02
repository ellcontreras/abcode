<template>
  <div class="content">
    <h1 class="title is-1 has-text-centered has-text-white">¿Qué es esta web?</h1>
    <p>
      Este es mi proyecto para la materia
      <b>
        <i>Desarrolla y Administra Plataformas de E-Learning</i>
      </b> :)
    </p>
    <p>
      ¿En que consiste CBCode?, simple, es una LMS o plataforma de E-Learning, plataforma de aprendizaje, etc, la cual
      contiene cursos para aprender los contenidos de cada modulo de la materia de programación del
      <a
        href="https://cbtis148.edu.mx"
      >CBTis. No.148</a>
      , no importa que no pertenezcas a esta escuela, puedes tomar los cursos y aprender por tu cuenta también :)
    </p>
    <hr>
    <h3 class="subtitle is-3 has-text-centered">Frontend</h3>
    <p>
      Esta plataforma ha sido desarrollada usando
      <a
        href="https://vuejs.org/"
        target="__blank"
      >Vue.js</a>, un framework para javascript que permite desarrollar aplicaciones web rapido,
      robustas y muy facilmente en comparación con frameworks como React.js o Angular, debido a que incorpora todo el set
      necesario para un proyecto desde su código base.
      Las principales caracteristicas de este set incluyen:
    </p>
    <ul>
      <li>Router</li>
      <li>Manejador de estado</li>
      <li>Reactividad</li>
    </ul>
    <p>
      Aparte, usamos un framework de CSS3 llamado
      <a href="https://bulma.io">Bulma</a> es fácil de usar, es muy completo y aparte
      muy extensible gracias a los plugins que la misma comunidad de desarrolladores ha hecho y publicado en
      <a
        href="https://GitHub.com"
      >GitHub.</a>
    </p>
    <h3 class="subtitle is-3 has-text-centered">Backend</h3>
    <p>
      Otra tecnología parte del stack de desarrollo de
      <b>CBCode</b> es
      <a href="https://firebase.google.com" target="__blank">Firebase</a> un BaaS, que permite desarrollar aplicaciones con bases
      de datos en tiempo real, administrar usuarios facilmente, incluir chats, notificaciones push entre otras funcionalidades, para
      este proyecto principalmente se usaron las siguientes caracteristicas:
    </p>
    <ul>
      <li>RealTime Database</li>
      <li>Push Notifications</li>
      <li>Hosting</li>
      <li>Cloud Messaging</li>
      <li>Authentication</li>
    </ul>
    <h3 class="subtitle is-3">Código Fuente?</h3>
    <a href="https://github.com/Obsinqsob01/e-learning-plattform">Aqui el repositorio a GitHub.</a>
  </div>
</template>

<style scoped>
a {
  color: #4681df !important;
}

a:hover {
  color: #444 !important;
}
</style>
