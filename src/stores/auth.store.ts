import { defineStore } from "pinia";
import { loginpayload, user_data } from '../types/auth.types';
import { make_login, create_user } from "../service/auth.services";
import {
  AddToken,
  RemoveToken
} from "../utils/localstorage";
import { router } from "../router/router";
import { useToast } from "vue-toastification";

const toast = useToast();
export const UseAuthStore = defineStore("auth", {
  state: () => ({
  }),
  actions: {
  
    async MakeLogin(data_send: loginpayload) {
      const data  = await make_login(data_send);
      if (data != null) {
          router.push("/");
          AddToken(String(data))
          toast.success("Bienvenido ",{timeout: 4000});
      }else{
        toast.error("upss, ah habido un problema... por favor revise sus credenciales", {timeout:6000})
      }
    },
    MakeLogout() {
      RemoveToken();
      toast.info("Cierre de sesión satifactorio");
      router.push("/auth");
  
    },
    async CreateUser(values: user_data) {
      try {
        const data = await create_user(values);
     
        if (data != null) {
          toast.success(data)


        }
      } catch {
        toast.warning("upss, sucedio un error")
      }
    },
  },
});