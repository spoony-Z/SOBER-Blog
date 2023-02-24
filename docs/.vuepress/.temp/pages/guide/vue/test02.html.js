export const data = JSON.parse("{\"key\":\"v-0825ddd0\",\"path\":\"/guide/vue/test02.html\",\"title\":\"2222222222222222222222\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1677152493000,\"contributors\":[{\"name\":\"spoony_Z\",\"email\":\"shenjun_y@yeah.net\",\"commits\":1}]},\"filePathRelative\":\"guide/vue/test02.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
