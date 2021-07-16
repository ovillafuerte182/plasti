import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/notifications-page',
      name: 'notifications-page',
      component: () => import('@/views/apps/table/vue-good-table/GoodTable.vue'),
      meta: {
        pageTitle: 'Notifications Page',
        breadcrumb: [
          {
            text: 'Notifications Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/notifications-page2',
      name: 'notifications-page2',
      component: () => import('@/views/apps/table/vue-good-table/GoodTable.vue'),
      meta: {
        pageTitle: 'Notifications Page2',
        breadcrumb: [
          {
            text: 'Notifications Page2',
            active: true,
          },
        ],
      },
    },
    {
      path: '/orders-page',
      name: 'orders-page',
      component: () => import('@/views/apps/table/vue-order-table/GoodTable.vue'),
      meta: {
        pageTitle: 'Orders Page',
        breadcrumb: [
          {
            text: 'Orders Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/maintenance-page',
      name: 'maintenance-page',
      component: () => import('@/views/apps/table/vue-maintenance-table/GoodTable.vue'),
      meta: {
        pageTitle: 'Maintenance Page',
        breadcrumb: [
          {
            text: 'Maintenance Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/integration-page',
      name: 'integration-page',
      component: () => import('@/views/apps/table/vue-integration-table/GoodTable.vue'),
      meta: {
        pageTitle: 'Integration Page',
        breadcrumb: [
          {
            text: 'Integration Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/configuraciones',
      name: 'configuraciones',
      component: () => import('@/views/apps/table/vue-configuraciones-table/GoodTable.vue'),
      meta: {
        pageTitle: 'Configuraciones',
        breadcrumb: [
          {
            text: 'Configuraciones',
            active: true,
          },
        ],
      },
    },
    {
      path: '/notify-prog',
      name: 'notify-prog',
      component: () => import('@/views/apps/forms/form-layout/FormLayoutMultipleColumn.vue'),
      meta: {
        pageTitle: 'Notifications Page',
        breadcrumb: [
          {
            text: 'Notifications Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/create-order',
      name: 'create-order',
      component: () => import('@/views/apps/forms/form-layout-orders/FormLayoutMultipleColumn.vue'),
      meta: {
        pageTitle: 'Orders Page',
        breadcrumb: [
          {
            text: 'Orders Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/create-integration',
      name: 'create-integration',
      component: () => import('@/views/apps/forms/form-layout-integration/FormLayoutMultipleColumn.vue'),
      meta: {
        pageTitle: 'Integrations Page',
        breadcrumb: [
          {
            text: 'Integrations Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/parametros-page',
      name: 'parametros-page',
      component: () => import('@/views/apps/forms/form-wizard/FormWizard.vue'),
      meta: {
        pageTitle: 'Parametros page',
        breadcrumb: [
          {
            text: 'Parametros page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/auth-forgot-password-v2',
      name: 'auth-forgot-password-v2',
      component: () => import('@/views/apps/pages/authentication/ForgotPassword-v2.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/reset-password-v2',
      name: 'reset-password-v2',
      component: () => import('@/views/apps/pages/authentication/ResetPassword-v2.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/edit-user',
      name: 'edit-user',
      component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/edit-page',
      name: 'edit-page',
      component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
      meta: {
        pageTitle: 'Edit user',
        breadcrumb: [
          {
            text: 'Edit user',
            active: true,
          },
        ],
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

export default router
