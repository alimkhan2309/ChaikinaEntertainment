import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventView from '@/views/EventView.vue'
import TeamView from '@/views/TeamView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/event/:id',
    name: 'EventView',
    component: EventView,
    props:true
  },
  {
    path: '/team/:id',
    name: 'TeamView',
    component: TeamView,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition; // For back/forward navigation
        } else {
            return { x: 0, y: 0 }; // Scroll to the top for new routes
        }
    }
})

export default router
