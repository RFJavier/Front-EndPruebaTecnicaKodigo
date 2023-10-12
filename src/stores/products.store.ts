import { products } from './../types/products.types';
import { get_products_list, search_products, delete_products, create_products, update_products } from '../service/products.services';
import { defineStore } from "pinia";
import { AddStore } from './cartproduct.store';
import { products_payload } from '../types/products.types';
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseProductStore = defineStore("product", {
  state: () => ({
    products: {} as products[],
    productsCode: {} as products
  }),
  actions: {
    async GetAllProducts() {
      const  products = await get_products_list();
      this.products = products
      return products
    },

    async SearchInProducts(data_send: products_payload){
      const  product = await search_products(data_send);
console.log(product)
if(data_send){
  AddStore().addProduct(product)
}
   },

   async CreateProducts(values: products) {
    try {
      const data = await create_products(values);
   
      if (data != null) {
        toast.success("Nuevo producto creado")
      }
    } catch {
      toast.warning("upss, sucedio un error")
    }
  },
  async DeleteProduct(id: number) {
    try {
      const data = await delete_products(id);
      if (data != null)
          toast.success("Producto borrado")
    } catch {
      toast.error("upss, sucedio un error");
    }
  },
  async UpdateUser(id: number, values: products) {
    try {
      const data = await update_products(id, values);

      if (data != null) {
        toast.success("Producto Modificado")
      }
    } catch {
      toast.error("upss, sucedio un error")
    }
  },
  },
});



