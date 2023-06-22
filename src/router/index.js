import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/List'
import Home from '../components/Home'


const routes = [
  {
    path: "/",
    component: Home,
    
  },
  {
    path: "/list",
    component: () => import('../components/List.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router; 