<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
      class="max-w-screen-xl m-0 sm:m-20 bg-white shadow rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
          <img src="" class="w-32 mx-auto" />
        </div>
        <div class="flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">Bienvenido</h1>
          <form @submit="OnSubmit">
            <div class="w-full flex-1 mt-8">
              <div class="my-12 border-b text-center">
                <div
                  class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                >
                  Ingresa tus datos
                </div>
              </div>

              <div class="mx-auto w-72">
                <div
                  class="flex w-full justify-center items-center rounded-lg px-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                >
                  <OhVueIcon
                    scale="1.25"
                    name="fa-user"
                    class="text-gray-600"
                  />
                  <Field
                    name="nickname"
                    class="w-full pl-3 text-gray-700 py-4 outline-none bg-transparent"
                    
                    placeholder="Usuario"
                  />
                </div>
                <ErrorMessage
                  class="text-red-500 text-sm my-2"
                  name="nickname"
                ></ErrorMessage>
                <div
                  class="flex justify-center items-center rounded-lg px-4 mt-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                >
                  <OhVueIcon
                    scale="1.25"
                    name="fa-lock"
                    class="text-gray-600"
                  />
                  <field
                    name="userpassword"
                    class="w-full pl-3 text-gray-700 py-4 outline-none bg-transparent"
                    type="password"
                    placeholder="Contraseña"
                  />
                </div>
                <ErrorMessage
                  class="text-red-500 text-sm my-2"
                  name="userpassword"
                ></ErrorMessage>
                <button
                  @submit="OnSubmit"
                  class="mt-5 tracking-wide font-semibold bg-gradient-to-l to-[#42b883] from-cyan-600 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <OhVueIcon scale="1.5" name="hi-login" class="text-gray-50" />
                  <span class="ml-3"> Iniciar Sesión </span>
                </button>
              </div>
            </div>
          </form>
          <CreateUser/>
        </div>
      </div>
      <div
        class="flex-1 hidden bg-[#35495e] text-center rounded-r-lg lg:flex justify-center items-center"
      >
        <img width="450" src="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { loginpayload } from "../types/auth.types";
import * as yup from "yup";
import { UseAuthStore } from "../stores/auth.store";
import { OhVueIcon } from "../plugins/oh-vue-icons";
import CreateUser from "../components/CreateUser.vue";
const { MakeLogin } = UseAuthStore();
const { handleSubmit } = useForm<loginpayload>({
  validationSchema: yup.object().shape({
    nickname: yup
      .string()
      .required("Debes escribir el correo"),
    userpassword: yup.string().required("Debes escribir tu contraseña"),
  }),
});
const OnSubmit = handleSubmit(async (values) => {
  await MakeLogin(values);
});
</script>



<style lang="scss"></style>
