"use strict";

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles.css";
import properties from "./.props";



let app = {
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
};

// Vue.config.devtools = false;
// Vue.config.productionTip = false;

for (const [property, value] of Object.entries(properties)) {
  Object.defineProperty(Vue.prototype, property, {
    value: value,
    writeable: false,
  });
}

Vue
  .use(BootstrapVue)
  .use(IconsPlugin);

new Vue(app);
