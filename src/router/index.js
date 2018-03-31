import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Main from '@/components/main'
import Customers from '@/components/customers/customers'
import CustomerEdit from '@/components/customers/customerEdit'
import CustomerDetail from '@/components/customers/customerDetail'
import Orders from '@/components/orders/orders'
import AddOrder from '@/components/orders/addOrder'
import AddOrderDetail from '@/components/orders/addOrderDetail'
import Products from '@/components/products/products'
import AddNewProduct from '@/components/products/addNewProduct'
import EditProduct from '@/components/products/editProduct'
import DataAnalysis from '@/components/dataAnalysis/dataAnalysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
        { path: '', redirect: 'customerManagement' },
        {
          path: 'customerManagement',
          component: Customers
        },
        {
          path: 'customerManagement/customerEdit',
          component: CustomerEdit
        },
        {
          path: 'customerManagement/customerDetail',
          component: CustomerDetail
        },
        {
          path: 'orderManagement',
          component: Orders
        },
        {
          path: 'orderManagement/addOrder',
          component: AddOrder
        },
        {
          path: 'orderManagement/addOrderDetail',
          component: AddOrderDetail
        },
        {
          path: 'productManagement',
          component: Products
        },
        {
          path: 'productManagement/addNewProduct',
          component: AddNewProduct
        },
        {
          path: 'productManagement/editProduct',
          component: EditProduct
        },
        {
          path: 'dataAnalysis',
          component: DataAnalysis
        }
      ]
    } 
  ]
})