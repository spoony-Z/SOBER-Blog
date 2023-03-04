export const data = JSON.parse("{\"key\":\"v-06710531\",\"path\":\"/guide/vue/test01.html\",\"title\":\"1111111111111111111111111111111\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1677152493000,\"contributors\":[{\"name\":\"spoony_Z\",\"email\":\"shenjun_y@yeah.net\",\"commits\":1}]},\"filePathRelative\":\"guide/vue/test01.md\"}")

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
