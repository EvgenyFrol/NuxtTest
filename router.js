import Vue from 'vue'
import Router from 'vue-router'

import Container from '@/components/Container'
import NoContent from '@/components/NoContent'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/about',
        name: 'Container',
        component: Container
      },
      {
        path: '/features',
        name: 'NoContent',
        component: NoContent
      },
      {
        path: '/penthouses',
        name: 'NoContent',
        component: NoContent
      },
      {
        path: '/apartaments',
        name: 'NoContent',
        component: NoContent
      }
    ]
  })
}
