export const data = JSON.parse("{\"key\":\"v-09dab66f\",\"path\":\"/guide/vue/test03.html\",\"title\":\"333333333333333333333333333333333\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1677152493000,\"contributors\":[{\"name\":\"spoony_Z\",\"email\":\"shenjun_y@yeah.net\",\"commits\":1}]},\"filePathRelative\":\"guide/vue/test03.md\"}")

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
