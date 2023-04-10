import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "C:/Users/admin/Desktop/my-docs/my-docs/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.200_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "C:/Users/admin/Desktop/my-docs/my-docs/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.200_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
