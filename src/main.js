import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import toastr from "toastr";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "./registerServiceWorker";

import "./sass/styles.scss";

Vue.config.productionTip = false;

toastr.options = {
  positionClass: "toast-top-right"
};

Vue.prototype.$toastr = toastr;

Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
