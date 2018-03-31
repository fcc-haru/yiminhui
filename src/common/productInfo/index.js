import page from './page.vue'

page.install=function(Vue){
    Vue.component("productInfo",page)
}

export default page