export const siteData = JSON.parse("{\"base\":\"/SOBER-Blog/\",\"lang\":\"zh-CN\",\"title\":\"SOBER\",\"description\":\"发到付加防腐剂附加费减肥减肥减肥减肥减肥就\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
