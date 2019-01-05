import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Add from '@/components/Add';
import List from '@/components/List';
import User from '@/components/User';
import Info from '@/components/Info';
import Home from '@/components/Home';

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'user',
          name: 'user',
          component: User
        },
        {
          path: 'list',
          name: 'list',
          component: List
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
