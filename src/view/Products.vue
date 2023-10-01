<script setup lang="ts">
import TableHeader from "../global/TableHeader.vue";
import Layout from "../global/layout.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { UseProductStore } from "../stores/products.store";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { products } from "../types/products.types";

const { GetAllProducts } = UseProductStore();

onMounted(async () => {
  await GetAllProducts();
});

const { products } = storeToRefs(UseProductStore());
const headers = ref(["Nombre", "Stock", "Precio", "Descripcion"]);
</script>

<template>
  <Layout>
    <div class="">
      <HeaderProduct></HeaderProduct>
      <PerfectScrollbar>
        <TableHeader :table_headers="headers">
          <tr
            v-for="(product, index) in products"
            :key="index"
            class="hover:bg-gray-50"
          >
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              {{ product.productname }}
            </th>
            <td class="px-6 py-4">
              {{ product.quantity }}
            </td>
            <td class="px-6 py-4">
              {{ product.price }}
            </td>
            <td class="px-6 py-4">
              {{ product.descriptions }}
            </td>
          </tr>
        </TableHeader>
      </PerfectScrollbar>
    </div>
  </Layout>
</template>


