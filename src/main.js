import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import toastr from "toastr";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ElementUI from "element-ui";
import VueApexCharts from "vue-apexcharts";
import "element-ui/lib/theme-chalk/index.css";
import "./registerServiceWorker";

import "toastr/build/toastr.min.css";
import "./sass/styles.scss";

import locale from "element-ui/lib/locale/lang/es";

import VueQuillEditor from "vue-quill-editor";

// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Vue.use(VueQuillEditor);

Vue.config.productionTip = false;

toastr.options = {
  positionClass: "toast-top-right"
};

Vue.prototype.$toastr = toastr;

library.add(faTrash, faPen, faEye);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("apexchart", VueApexCharts);

Vue.use(ElementUI, { locale });

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
