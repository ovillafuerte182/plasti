<template>
  <!-- Alert: No item found -->
  <b-tabs
    pills
  >
    <!-- Tab: Account -->
    <!-- Tab: Information -->
    <b-tab>
      <template #title>
        <feather-icon
          icon="UserIcon"
          size="16"
          class="mr-0 mr-sm-50"
        />
        <span class="d-none d-sm-inline">Information</span>
      </template>
      <user-edit-tab-information class="mt-2 pt-75" />
    </b-tab>

    <!-- Tab: Social -->
    <b-tab>
      <template #title>
        <span class="d-none d-sm-inline">Seguridad</span>
      </template>
      <user-edit-tab-social class="mt-2 pt-75" />
    </b-tab>
  </b-tabs>
</template>

<script>
import {
  BTab, BTabs,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import userStoreModule from '../userStoreModule'
import UserEditTabInformation from './UserEditTabInformation.vue'
import UserEditTabSocial from './UserEditTabSocial.vue'

export default {
  components: {
    BTab,
    BTabs,
    UserEditTabInformation,
    UserEditTabSocial,
  },
  setup() {
    const userData = ref(null)

    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-user/fetchUser', { id: router.currentRoute.params.id })
      .then(response => { userData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        }
      })

    return {
      userData,
    }
  },
}
</script>

<style>

</style>
