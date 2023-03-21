import { defineUserConfig, defaultTheme } from 'vuepress'
// import plugins from './config/plugins'
import developmentRecord from './config/sidebar/development-record' /** 开发记录 */
import vueTemplateList from './config/sidebar/vue-template-list' /** vue后台模板合集 */
import courseJava from './config/sidebar/course-java' /** java教程 */
import courseVue2 from './config/sidebar/course-vue2' /** vue2教程 */
import courseJavaScript from './config/sidebar/course-javaScript' /** javaScript教程 */
import ToolInstallation from './config/sidebar/Tool-installation' /** 工具 */
import npmPlugIn from './config/sidebar/npm-plugIn' /** npm插件 */


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'SOBER',
    base: "/SOBER-Blog/",
    head: [
        ['link', { rel: 'icon', href: '' }]
    ],
    description: '',
    theme: defaultTheme({
        logo: '/images/homeLogo.jpg',
        // repo: 'https://github.com/spoony-Z',
        navbar: [{
                // icon: 'https://www.168wangxiao.com/static/assets/168wangxiao.jixujiaoyuxinxihuapingtai.png',
                text: '首页',
                link: '/',
            },
            {
                text: '开发笔记',
                link: '/development-record/vue2/1.Vue依赖注入 - Provide  Inject.md',
            },
            {
                text: '学习笔记',
                children: [
                    // { text: 'vue2 教程', link: '/course-vue2/primary/vue2初级教程.md' },
                    // { text: 'recat 教程', link: '/complete-tutorial/recat' },
                    // { text: 'uni-app 教程', link: '/complete-tutorial/uniapp' },
                    // { text: 'Javascript 教程', link: '/course-javaScript/primary/javaScript初级教程.md' },
                    { text: 'Java', link: '/course-java/primary/总结.md' },
                    { text: 'TypeScript', link: '/course-TypeScript/' },
                    { text: 'Recat', link: '/course-recat/' },
                ],
            },
            {
                text: 'vue模板合集',
                link: '/vue-template-list/fantastic-admin.md',
            },
            {
                text: '工具',
                children: [
                    { text: 'MySql安装', link: '/Tool-installation/MySql安装教程.md' },
                    { text: 'IDEA安装', link: '/Tool-installation/IDEA安装.md' },
                    { text: 'IDEA的使用', link: '/Tool-installation/IDEA的使用.md' },
                ],
            },
            {
                text: 'npm插件',
                children: [
                    { text: '快速删除node_modules依赖包', link: '/npm-plugIn/快速删除node_modules依赖包.md' },
                    { text: 'vue-cropper 图片裁剪', link: '/development-record/vue2/vue图片裁剪.md' },
                ],
            },
            {
                text: 'GitHub',
                link: 'https://github.com/spoony-Z',
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/spoony_Z',
            },
        ],
        sidebar: {
            ...developmentRecord,
            ...vueTemplateList,
            ...courseJava,
            ...courseVue2,
            ...courseJavaScript,
            ...ToolInstallation,
            ...npmPlugIn,
            '/': [''],
        },
        subSidebar: true,
    }),
    // plugins

})