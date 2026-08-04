import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.ts";

import "./styles/reset.css";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/utils.scss";

createApp(App).use(router).mount("#app");
