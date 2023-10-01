<script lang="ts" setup>
import * as yup from "yup";
import { UseProductStore } from "../../stores/products.store";
import { ref } from "vue";
import { products } from '../../types/products.types';
import { Field, Form, useForm} from "vee-validate";
const showModal = ref(false);
const { CreateProducts } = UseProductStore();
const rol = 2;
const active = 1;
const { handleSubmit } = useForm<products>({
  validationSchema: yup.object().shape({
    idcategory: yup.number(),
    
    productname: yup.string(),
    
    code: yup.string(),
    
    quantity: yup.number(),
    
    price: yup.number(),
    
    descriptions: yup.string(),
    
    statusproduct: yup.string(),

    promotion: yup.string(),
  }),
});
const OnSubmit = handleSubmit(async (values) => {
  await CreateProducts(values);
    showModal.value = false;
});
</script>

<template>
  <div>
    <button
      @click="showModal = true"
      class="mt-5 tracking-wide font-semibold bg-blue-400 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
    >
    
      <span class="mx-16 ">Crear nuevo Usuario</span>
    </button>
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 px-20">
        <h3 class="text-lg font-medium mb-4 text-center">Crear Usuario</h3>
        <form @submit="OnSubmit">
          <div class="flex flex-col w-full mt-1">

            <Field v-show="false" name="idrol" v-model="rol" class="w-full h-10 border rounded-xl mb-4"/>

        
            <div class="mb-4">
              <label for="username" class="block text-gray-700 text-sm font-medium">Nombre:</label>
              <Field
                name="username" 
                type="string"
                class="w-full h-10 p-4 border rounded-xl"
                placeholder="Ingrese su nombre"
              />


            </div>
            <div class="mb-4">
              <label for="userpassword" class="block text-gray-700 text-sm font-medium">Contraseña:</label>
              <Field
                name="userpassword"
                type="string"
                class="w-full h-10 p-4 border rounded-xl"
                placeholder="Ingrese la contraseña"
              />
            </div>
            <div class="mb-4">
              <label for="nickname" class="block text-gray-700 text-sm font-medium">Alias de usuario:</label>
              <Field
                name="nickname"
                type="string"
                class="w-full h-10 p-4 border rounded-xl"
                placeholder="Ingrese su alias"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-medium">Email:</label>
              <Field
                name="email"
                type="string"
                class="w-full h-10 p-4 border rounded-xl"
                placeholder="Ingresa tu email"
              />
            </div>
            <div class="">
              <Field
              v-show="false"
              v-model="active"
                name="isactive"
                type="number"
                class="w-full h-10 p-4 border rounded-xl"
                placeholder="Ingrese la contraseña"
              />
            </div>
            <div class="mb-4">
              <label for="confirmPassword_aux" class="block text-gray-700 text-sm font-medium">Confirmar contrase;a:</label>
              <Field
                name="confirmPassword_aux"
                type="string"
                class="w-full h-10 p-4 border rounded-xl"
                placeholder="Ingrese de nuevo su contrase;a"
              />
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button
            @submit="OnSubmit"
              type="submit"
              class="px-4 py-2 bg-gradient-to-l to-[#42b883] from-cyan-600 text-white text-sm font-medium rounded-md"
            >
              Guardar
            </button>
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>