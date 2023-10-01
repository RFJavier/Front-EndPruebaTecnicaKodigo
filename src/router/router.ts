import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import { IsAuth } from "../utils/localstorage";
import home from "../view/home.vue";
import Auth from "../view/Auth.vue";
import products from "../view/Products.vue";
import ProductShop from "../view/Productshop.vue";
const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: home,
  },
  {
    name: "Auth",
    path: "/auth",
    component: Auth,
  },
  {
    name: "Product",
    path: "/products",
    component: products,
  },
  {
    name: "shopingCart",
    path: "/shopingcart",
    component: ProductShop,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
router.beforeEach((to, _, next) => {
  const publicPages = ["/auth"];
  const authRequired = !publicPages.includes(to.path);
  if (authRequired && !IsAuth()) {
    return next("/auth");
  }
  next();
});
export { router };
