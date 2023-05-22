import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'starship' }
  },
  {
    path: '/starship',
    name: 'starship',
    component: () => import('@/views/index.vue'),
    meta: {
      title: 'Starship'
    }
  },
  {
    path: '/starship/detail',
    name: 'starshipdetail',
    component: () => import('@/views/detail.vue'),
    meta: {
      title: 'Starship Detail'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
