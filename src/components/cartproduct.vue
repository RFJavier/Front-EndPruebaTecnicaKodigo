<script lang="ts" setup>
import { AddStore } from "../stores/cartproduct.store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import ProductDetails from "../view/ProductDetails.vue";
const { clearProducts } = AddStore();
const showModal = ref(false);
const { cartProducts } = storeToRefs(AddStore());
</script>
<template>
  <div>
    <button
      @click="showModal = true"
      class="mt-5 tracking-wide font-semiboldto bg-gradient-to-l to-[#42b883] from-cyan-600 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
    >
      <span class="mx-16">Carrito</span>
    </button>
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 px-20">
        <h3 class="text-lg font-medium mb-4 text-center">
          Productos en el carro
        </h3>
        <PerfectScrollbar>
          <template v-for="product in cartProducts" :key="index">
            <ProductDetails :product="product"></ProductDetails>
          </template>
        </PerfectScrollbar>
        <div class="flex justify-center items-center mt-4">
          <button
            type="submit"
            class="px-4 py-2 bg-gradient-to-l to-[#42b883] from-cyan-600 text-white text-sm font-medium rounded-md"
          >
            Comprar
          </button>
          <button
            type="button"
            @click="showModal = false"
            class="px-4 py-2 bg-gradient-to-l to-[#FF416C] from-[#FF4B2B]  text-white text-sm font-medium rounded-md ml-2"
          >
            Cancelar
          </button>
          <button
            @click="clearProducts()"
            type="button"
            class="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2"
          >
            Vaciar Productos
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
