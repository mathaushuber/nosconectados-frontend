import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import router from "./router";
import VueMask from "v-mask";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
// import "buefy/dist/buefy.css";
import "./styles/style.scss";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
Vue.use(Buefy);
Vue.config.productionTip = false;
Vue.use(VueMask);
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
