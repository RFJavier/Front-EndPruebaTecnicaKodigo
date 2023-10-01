<script lang="ts" setup>
import { ref } from "vue";
import { UseProductStore } from "../stores/products.store";
import { onMounted } from "vue";
const { GetAllProducts } = UseProductStore();
const currentDate = ref(
  new Date().toLocaleDateString("es-SV", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
);
onMounted(async () => {
  await GetAllProducts();
});
const { table_headers } = defineProps<{ table_headers: string[] }>();
</script>
<template>
  <div class="overflow-hidden m-5">
    <div class="flex justify-between m-1 h-[20%] w-[98%]">
      <p class="text-gray-500 font-semibold">{{ currentDate }}</p>
    </div>
    <table class="w-full bg-white text-left text-sm text-gray-500 p-5">
      <thead class="bg-[#19376b]">
        <tr>
          <th
            v-for="(head, index) in table_headers"
            :key="index"
            scope="col"
            class="px-6 py-4 text-white font-semibold"
          >
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss"></style>
