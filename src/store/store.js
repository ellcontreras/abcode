import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { DailyUpdatesMutations } from "./mutations";

export default new Vuex.Store({
  state: {
    title: "CBCode",
    courseCategories: [
      {
        title: "Fundamentos de Programación",
        categoryName: "fundamentos",
        description:
          "Eres nuevo en la programación? Estas en el lugar indicado, aqui contarás con todo lo necesario para empezar",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/luces.svg?alt=media&token=5236705f-c69f-4db7-8913-6fc9f495321d",
        links: ["PSeInt", "C++"],
        color: "is-success"
      },
      {
        title: "Programación Orientada a Objetos",
        categoryName: "poo",
        description:
          "Ya conoces los fundamentos? Que tal algo más? Aprende POO!",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/orientado_objetos.svg?alt=media&token=e673c365-3444-487a-bff8-8698720975c6",
        links: ["C#"],
        color: "is-primary"
      },
      {
        title: "Desarrollo Web",
        categoryName: "web",
        description:
          "Domina HTML5, CSS3 y Javascript para crear hermosos sitios web!",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/desarrollo_web.svg?alt=media&token=3655edd7-df02-45b5-a380-3da16e4450bd",
        links: ["HTML", "CSS3", "JavaScript"],
        color: "is-danger"
      },
      {
        title: "Desarrollo de Apps",
        categoryName: "apps",
        description:
          "Aprende a desarrollar aplicaciones para dispositivos moviles.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/desarrollo_apps.svg?alt=media&token=d4e6b3ab-a023-4389-834f-948d0838dadb",
        links: ["Java"],
        color: "is-warning"
      },
      {
        title: "Servidores",
        categoryName: "servidores",
        description:
          "Aprende a trabajar con servidores y administrar redes de computadoras.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/redes.svg?alt=media&token=e83ba034-2788-455d-823e-02630041e478",
        links: ["Cisco Packet Tracer", "DHCP", "DNS", "Correo", "Web"],
        color: "is-primary"
      }
    ],
    courses: [
      {
        name: "PSeInt",
        category: "fundamentos"
      },
      {
        name: "C++",
        category: "fundamentos"
      },
      {
        name: "C#",
        category: "poo"
      },
      {
        name: "HTML",
        category: "web"
      },
      {
        name: "CSS",
        category: "web"
      },
      {
        name: "JavaScript",
        category: "web"
      },
      {
        name: "Java",
        category: "apps"
      },
      {
        name: "Cisco Packet Tracer",
        category: "servidores"
      },
      {
        name: "DHCP",
        category: "servidores"
      },
      {
        name: "DNS",
        category: "servidores"
      },
      {
        name: "Correo",
        category: "servidores"
      },
      {
        name: "Web",
        category: "servidores"
      }
    ],
    dailyUpdates: [
      "@usuario ha terminado un curso",
      "Tienes nuevos mensajes en la bandeja",
      "Hay un nuevo usuario",
      "Hay esto bla",
      "lorem ipsum dolor quien sabe que"
    ]
  },
  getters: {
    categoryColor: state => categoryName => {
      return state.courseCategories.filter(
        category => category.categoryName == categoryName
      )[0];
    },
    courses: state => {
      // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      let array = state.courses;

      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  },
  mutations: Object.assign({}, DailyUpdatesMutations),
  actions: {}
});
