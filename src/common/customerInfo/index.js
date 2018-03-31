import page from './page.vue'

page.install=function(Vue){
    Vue.component("customerInfo",page)
}

export default page