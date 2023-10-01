<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { UseAuthStore } from "../stores/auth.store";
import { OhVueIcon } from "../plugins/oh-vue-icons";
let show = ref(false);
const { MakeLogout } = UseAuthStore();
const setShow = () => {
  show.value = !show.value;
};
function logout() {
  MakeLogout();
}
</script>
<template>
  <div class="w-screen h-screen">
    <div
      v-if="!show"
      class="cursor-pointer absolute top-1 right-4 text-2xl mt-2"
    >
      <OhVueIcon
        @click.stop="setShow"
        name="hi-solid-menu"
        color="black"
        scale="2"
        class="text-gray-800"
      />
    </div>
    <div
      v-else
      class="absolute z-50 mt-2 text-2xl cursor-pointer top-1 right-4"
    >
      <OhVueIcon
        @click.stop="setShow"
        name="fa-times"
        color="white"
        scale="2"
        class="z-50 text-white"
      />
    </div>
    <div
      :class="show ? 'translate-x-0' : 'translate-x-full'"
      class="top-0 right-0 h-screen fixed p-10 text-white ease-in-out duration-300 bg-[#35495e]"
    >
      <div class="flex w-full">
        <div class="flex flex-col w-full h-full">
          <div class="flex mt-4 text-sm text-white">
            <RouterLink class="-w-12" to="/">
              <OhVueIcon scale="1.40" name="hi-solid-home" class="text-white" />
            </RouterLink>
            <router-link to="/" class="mt-1 text-lg font-semibold">
              Inicio
            </router-link>
          </div>
          <!-- -->
          <div class="flex mt-4 text-base text-white">
            <RouterLink class="-w-12" to="/products">
              <OhVueIcon
                scale="1.40"
                name="md-productionquantitylimits"
                class="text-white"
              />
            </RouterLink>
            <router-link to="/products" class="mt-1 text-lg font-semibold">
              Productos
            </router-link>
          </div>
          <!-- Logout -->
          <div
            @click="logout()"
            type="submit"
            class="flex mt-4 text-lg text-white"
          >
            <RouterLink to="#" class="-w-12">
              <OhVueIcon scale="1.40" name="hi-logout" class="text-white" />
            </RouterLink>
            <p class="mt-1 text-lg font-semibold">Cerrar Sesión</p>
          </div>
        </div>
      </div>
      <div class="absolute bottom-2 dark:text-white"></div>
    </div>

    <div class="w-screen h-screen px-5 overflow-hidden bg-gray-50">
      <slot />
    </div>
  </div>
</template>
<style lang="scss"></style>
