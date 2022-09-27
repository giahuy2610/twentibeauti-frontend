import { createRouter, createWebHistory } from "vue-router";

//store
import AppLayout from "../layouts/AppLayout.vue";

import HomeStore from "../pages/store/home/HomeStore.vue";
import NotFound from "../pages/404/404.vue";
import BrandsPage from "../pages/store/brands/Brands.vue";
import CategoriesPage from "../pages/store/categories/Categories.vue";
import CollectionsPage from "../pages/store/collections/Collections.vue";
import Payment from "../pages/store/payment/Payment.vue";
import PromotionsPage from "../pages/store/promotion/Promotion.vue";

//admin
import AdminLayout from "../layouts/AdminLayout.vue";

import Dashboard from "../pages/admin/dashboard/Dashboard.vue";
import Products from "../pages/admin/products/Products.vue";
import ProductDetail from "../pages/admin/products/ProductDetail.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    //redirect: { name: "home" },
    component: AppLayout,
    children: [
      {
        path: "",
        component: NotFound,
      },
    ],
  },
  {
    name: "store",
    path: "/",
    component: AppLayout,
    children: [
      {
        name: "home",
        path: "",
        component: HomeStore,
      },
      {
        name: "brands",
        path: "/brands",
        component: BrandsPage,
      },
      {
        name: "collections",
        path: "/collections",
        component: CollectionsPage,
      },
      {
        name: "promotions",
        path: "/promotions",
        component: PromotionsPage,
      },
      {
        name: "categories",
        path: "/categories",
        component: CategoriesPage,
      },
      {
        name: "payment",
        path: "/payment",
        components: Payment,
      }
    ],
  },
  {
    name: "admin",
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        name: "dashboard",
        path: "",
        component: Dashboard,
      },
      {
        name: "products",
        path: "/products",
        component: Products,
      },
      {
        name: "product details",
        path: "/products/{id}",
        component: ProductDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes,
});

export default router;
