import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import KanbanBoardIndex from '@/modules/kanban-board/KanbanBoardIndex.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'kanban-board',
    component: KanbanBoardIndex
  },
  {
    path: '*',
    component: KanbanBoardIndex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
