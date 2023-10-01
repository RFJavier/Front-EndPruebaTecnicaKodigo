
import { defineStore } from "pinia";
import { products } from '../types/products.types';





export const AddStore = defineStore("products", {
  state: () => ({
    cartProducts: [] as Array<products>,
  }),
  actions: {
    addProduct(products: products) {
      const index = this.cartProducts.findIndex(
        (product) => product.idproduct === products.idproduct
      );
      if (index === -1) {
        let discount = 0;
        let promotion = 0;
        if (products.promotion) {
          promotion = products.promotion;
          discount = products.price * (products.promotion / 100);
        }

        this.cartProducts.push({
          ...products,
          quantity: 1,
          total: products.price - discount,
          total_without_discount: products.price,
          discount,
          price_with_discount: products.price - discount,
          unit_discount: discount,
          promotion,
        });
      } else {
        this.cartProducts[index].quantity++;
        this.cartProducts[index].total_without_discount =
          this.cartProducts[index].quantity * this.cartProducts[index].price;
        this.cartProducts[index].discount =
          (this.cartProducts[index].total_without_discount *
            this.cartProducts[index].promotion) /
          100;
        this.cartProducts[index].total =
          this.cartProducts[index].total_without_discount -
          this.cartProducts[index].discount;
      }
    },

    //Delete
    removeProduct(productS: products) {
      const index = this.cartProducts.findIndex(
        (product) => product.idproduct === productS.idproduct
      );
      if (index !== -1) {
        if (this.cartProducts[index].quantity > 1) {
          this.cartProducts[index].quantity--;
          this.cartProducts[index].total -=
            this.cartProducts[index].price_with_discount;
          this.cartProducts[index].total_without_discount -=
            this.cartProducts[index].price;
          this.cartProducts[index].discount -=
            this.cartProducts[index].unit_discount;
        } else {
          this.cartProducts.splice(index, 1);
        }
      }
    },

    deleteProduct(productS: products) {
      const index = this.cartProducts.findIndex(
        (product) => product.idproduct === productS.idproduct
      );
      if (index !== -1) {
        this.cartProducts.splice(index, 1);
      }
    },
    clearProducts() {
      this.cartProducts = [];
    },
  },
});
