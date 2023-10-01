<script lang="ts" setup>
import { OhVueIcon } from "../plugins/oh-vue-icons";
import { products } from "../types/products.types";
import { AddStore } from "../stores/cartproduct.store";

interface Props {
  product: products;
}

const { addProduct, removeProduct } = AddStore();

const { product } = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col w-full rounded-xl bg-white p-4">
    <div class="h-auto w-full flex">
      <div class="w-44">
        <img
          class="rounded-xl"
          src="https://i.pinimg.com/564x/e6/4f/0b/e64f0b01ead6cc2028411ee605138ab4.jpg"
        />
      </div>
      <div class="w-full px-4">
        <p class="text-lg font-semibold text-gray-700">{{ product.productname }}</p>
        <p class="text-base text-gray-700">Código : {{ product.code }}</p>
        <p class="text-base text-gray-700">Categoría : {{ product.descriptions}}</p>
        <p class="tex-base text-gray-700">Cantidad : {{ product.quantity }}</p>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="flex items-center">
        <span class="text-sm text-blue-600 font-bold">$</span>
        <p class="text-xl font-semibold text-gray-700 ml-2">{{ product.price }}</p>
      </div>
      <div class="flex items-center justify-end">
        <button class="w-10 h-10 bg-gradient-to-l to-[#42b883] from-cyan-600 rounded-full mr-4">
          <OhVueIcon @click="addProduct(product)" scale="1.50" color="white" name="hi-solid-plus-sm"/>
        </button>
        <span class="px-6 text-xl font-semibold text-gray-700">-</span>
        <button
          class="w-10 h-10 bg-gradient-to-l to-[#e0514c] from-red-500 rounded-full ml-4"
        >
          <OhVueIcon
            @click="removeProduct(product)"
            scale="1.5"
            color="white"
            name="hi-solid-minus-sm"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
