import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createPinia } from "pinia";
import "vue3-toastify/dist/index.css";
import Paginate from "vuejs-paginate-next";

const app = createApp(App);
const pinia = createPinia();
app.use(Paginate);
app.use(pinia);
app.use(router);

app.mount("#app");
