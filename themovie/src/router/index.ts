import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'
import IndexPage from '@/pages/IndexPage.vue'
import SinglePage from '@/pages/SinglePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: UserView,
      children: [
        {
          path: '/',
          name: 'IndexPage',
          component: IndexPage,
        },
        {
          path: '/:id',
          name: 'SinglePage',
          component: SinglePage,
        },
      ]
    }
  ]
})

export default router
