import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import toastr from "toastr";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./registerServiceWorker";

import "./sass/styles.scss";

Vue.config.productionTip = false;

toastr.options = {
  positionClass: "toast-top-right"
};

Vue.prototype.$toastr = toastr;

library.add(faTrash, faPen, faEye);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
