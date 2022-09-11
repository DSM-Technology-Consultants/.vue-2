"use strict";

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

let data = {
  env: {
    appName: "Vue2",
  },
};

let app = {
  el: "#app",
  router,
  data: data,
  components: { App },
  template: "<App/>",
};

// Vue.config.devtools = false;
// Vue.config.productionTip = false;

Vue
  .use(BootstrapVue)
  .use(IconsPlugin);

new Vue(app);
