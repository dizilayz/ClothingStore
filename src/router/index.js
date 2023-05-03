import Vue from "vue";
import VueRouter from "vue-router";
import MenuPage from '@/pages/MenuPage';
import MainPage from '@/pages/MainPage';
import CartPage from '@/components/CartPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/menu',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})

