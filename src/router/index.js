import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Customer from '@/components/customer'
import Order from '@/components/order'
import Products from '@/components/order'
import Data from '@/components/order'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path:"customer",
          component: Customer
        },
        {
          path:"order",
          component: Order
        },
        {
          path:"products",
          component: Products
        },
        {
          path:"data",
          component: Data
        }
      ]

    }
  ]
})
