<script lang="ts" setup>

import { OhVueIcon } from "../plugins/oh-vue-icons";
import { products } from "../types/products.types";
import { AddStore } from "../stores/cartproduct.store";

interface Props {product: products;}
const { product } = defineProps<Props>();

const { addProduct, removeProduct} = AddStore();
</script>

<template>
      <div class="space-x-4 w-full h-full">
        <div class="flex grid-cols-2 gap-4">
          <div class="w-1/2">          
           
          <p
            class="sm:text-sm lg:text-lg ml-5 mt-2 text-gray-900">
            <img
            class="w-12 h-12 rounded-full"
            src="https://i.pinimg.com/564x/e6/4f/0b/e64f0b01ead6cc2028411ee605138ab4.jpg"
            alt="Thomas image"/>
            <span class="font-semibold">Nombre:</span> {{ product.productname }}
            <br />
            <span class="font-semibold">Precio:</span>
            ${{ product.price_with_discount.toFixed(2) }}
            <span class="font-semibold">Codigo:</span>
            {{ product.code }}
          </p>
        </div>

          <div class="flex justify-end">
            <button class="w-10 h-10">
              <OhVueIcon
                @click="addProduct(product)"
                scale="1.5"
                color="green"
                name="hi-solid-plus-circle"
              />
            </button>
            <p
              class="sm:text-sm lg:text-lg 3xl:text-3xl font-semibold mt-1 px-4"
            >
              {{ product.quantity }}
            </p>
            <button class="w-10 h-10">
              <OhVueIcon
                @click="removeProduct(product)"
                scale="1.5"
                color="red"
                name="hi-solid-minus-circle"
              />
            </button>
          </div>
        </div>
      </div>    
</template>
<style lang="scss"></style>
