<script setup lang="ts">
import layout from "../global/layout.vue";
import headerHome from "../global/HeaderHome.vue";
import Productshop from "./Productshop.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { AddStore } from "../stores/cartproduct.store";
import { UseProductStore } from "../stores/products.store";
import cartproduct from "../components/cartproduct.vue"
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { products } = storeToRefs(UseProductStore());
const { cartProducts } = storeToRefs(AddStore());
const { GetAllProducts } = UseProductStore();

function totalWithoutDiscount() {
  return cartProducts.value
    .map((prod) => Number(prod.total_without_discount))
    .reduce((a, b) => a + b, 0);
}
function Total() {
  return cartProducts.value
    .map((prod) => Number(prod.total))
    .reduce((a, b) => a + b, 0);
}
function TotalDescount() {
  return cartProducts.value
    .map((prod) => prod.discount)
    .reduce((a, b) => a + b, 0);
}
onMounted(async () => {
  await GetAllProducts();
});
</script>
<template>
  <layout>
    <div class="flex flex-col-2 w-full h-1/5 bg-amber-100  mb-3">
      <div class="w-1/2 items-center pl-14" ><headerHome/> </div>
    
      <div class="w-1/2 flex flex-col-2">
        <div class="w-1/3 grid grid-col-3"> <div
            class="inline-flex items-center py-1 sm:text-sm lg:text-lg font-semibold"
          >
            Descuento: $ {{ TotalDescount().toFixed(2) }}
          </div>
          <div
            class="inline-flex items-center py-1 sm:text-sm lg:text-lg font-semibold"
          >
            Total sin descuento: 
              $ {{ totalWithoutDiscount().toFixed(2) }} 
          </div>
          <div
            class="inline-flex items-center py-1 sm:text-sm lg:text-lg font-semibold"
          >
            Total a pagar: ${{ Total().toFixed(2) }}
          </div>
        </div>
        <div class="w-2/3 mr-10"><cartproduct/></div>
         
   
        </div>
      </div>
     
    <div class="w-full h-4/5 flex overflow-x-hidden bg-gray-50">
     
      <PerfectScrollbar>
          <div class="grid grid-cols-3 2xl:grid-cols-2 px-10">
       
              <template v-for="product in products" :key="index">
              <Productshop :product="product"></Productshop>
            </template>
 

          </div>
        </PerfectScrollbar>

    </div>
  </layout>
</template>
<style lang="scss"></style>
