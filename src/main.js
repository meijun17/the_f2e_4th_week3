import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";
export const app = createApp(App);

app.AOS = new AOS.init();
app.use(router).use(AOS).mount("#app");
