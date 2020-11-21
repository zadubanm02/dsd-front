import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";

// import Vuetify from 'vue-cli-plugin-vuetify'


createApp(App).use(router).use(VueApexCharts).mount('#app');
