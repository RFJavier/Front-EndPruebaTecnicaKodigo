<script lang="ts" setup>
import { OhVueIcon } from "../plugins/oh-vue-icons";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { UseProductStore } from "../stores/products.store";
import { products_payload } from "../types/products.types";
import { Form, Field, useForm } from "vee-validate";
import * as yup from "yup";
const { SearchInProducts } = UseProductStore();
const { handleSubmit } = useForm<products_payload>({
  validationSchema: yup.object().shape({
    productname: yup.string(),
  }),
});
const OnSubmit = handleSubmit(async (values) => {
  await SearchInProducts(values);
});
const currentDate = ref(
  new Date().toLocaleDateString("es-SV", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
);
</script>
<template>
  <header class="w-screen h-[20%] py-5">
    <div
      class="h-[20%] flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 ml-2"
    >
      <div class="flex justify-between m-1 h-[20%] w-[93%]">
        <p class="text-gray-500 font-semibold">{{ currentDate }}</p>
      </div>
    </div>
    <nav class="h-[20%] grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex justify-between items-center py-3">
        <div class="flex items-center gap-6 w-full">
          <router-link
            to=""
            class="rounded-xl bg-gradient-to-l to-[#FF416C] from-[#FF4B2B] px-5 py-2 text-sm font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-blue-500/50 md:w-auto h-10"
          >
            Categorias
          </router-link>
          <router-link
            to=""
            class="rounded-xl bg-gradient-to-l to-[#42b883] from-cyan-600 px-5 py-2 text-sm font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-blue-500/50 md:w-auto h-10"
          >
            Compras
          </router-link>
          <div class="text-gray-600 flex items-center justify-between w-full">
            <div class="flex items-center mr-4 w-full">
              <form class="flex justify-start items-center mr-4">
                <field
                  class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full md:w-auto"
                  name="productname"
                  placeholder="Busca algún producto..."
                />
                <button
                  type="submit"
                  @click="OnSubmit"
                  class="right-0 top-0 m-1"
                >
                  <oh-vue-icon name="bi-search" scale="1.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="scss"></style>
