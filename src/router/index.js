import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/class',
    name: 'class',
    component: () => import('../test/class.vue')
  }, {
    path: '/details',
    name: 'details',
    component: () => import('../test/details.vue')
  },
  {
    path: '/detail',
    name: ' Detail',
    component: () => import('../vant/Detail.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/practice2',
    name: 'Practice2',
    component: () => import('../views/Practice2.vue')
   }, 
   {
    path: '/search',
    name: 'search',
    component: () => import('../vant/search.vue')
   }, 
   {
    path: '/list',
    name: 'list',
    component: () => import('../vant/list.vue')
   },
   {
    path:'/',
    redirect:'/demo'
   },
  {
    path: '/bottom',
    name: 'Bottom',
    component: () => import('../vant/Bottom.vue'),
    children: [


      {
        path: '/demo',
        name: 'Demo',
        component: () => import('../vant/Demo.vue')
      }, {
        path: '/classify',
        name: 'Classify',
        component: () => import('../vant/Classify.vue'),
      }, {
        path: '/shopcar',
        name: 'Shopcar',
        component: () => import('../vant/Shopcar.vue')
      }, {
        path: '/person',
        name: ' Person',
        component: () => import('../vant/Person.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router