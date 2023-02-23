import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        console.log("app", app);
        console.log("router", router);
        console.log("siteData", siteData);
    },
    setup() {},
    rootComponents: [],
})