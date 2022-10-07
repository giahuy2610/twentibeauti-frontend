import { createRouter, createWebHistory } from "vue-router";

//store
import AppLayout from "../layouts/AppLayout.vue";

import HomeStore from "../pages/store/home/HomeStore.vue";
import NotFound from "../pages/404/404.vue";
import BrandsPage from "../pages/store/brands/Brands.vue";
import CategoriesPage from "../pages/store/categories/Categories.vue";
import CollectionsPage from "../pages/store/collections/Collections.vue";
import Checkout from "../pages/store/check-out/Checkout.vue";
import PromotionsPage from "../pages/store/promotion/Promotion.vue";
import Account from "../pages/store/account/AccountPage.vue";
import Product from "../pages/store/product/Product.vue";
import AccountProfile from "../pages/store/account/components/Profile.vue";
import AccountOrders from "../pages/store/account/components/Orders.vue";
import AccountAddress from "../pages/store/account/components/Address.vue";
//admin
import AdminLayout from "../layouts/AdminLayout.vue";

import Dashboard from "../pages/admin/dashboard/Dashboard.vue";
import Products from "../pages/admin/products/Products.vue";
import ProductDetail from "../pages/admin/products/ProductDetail.vue";
import ProductCreate from "../pages/admin/products/create/ProductCreate.vue";
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
        name: "account",
        path: "/account",
        component: Account,
        children: [
          {
            path: "profile",
            component: AccountProfile,
          },
          {
            path: "orders",
            component: AccountOrders,
          },
          {
            path: "address",
            component: AccountAddress,
          },
          {
            path: "my-promotions",
            component: AccountProfile,
          },
        ],
      },
      {
        name: "checkout",
        path: "/checkout",
        component: Checkout,
      },
      {
        name: "product",
        path: "/product",
        component: Product,
      },
    ],
  },
  {
    name: "admin",
    path: "/admin/",
    component: AdminLayout,
    children: [
      {
        name: "dashboard",
        path: "",
        component: Dashboard,
      },
      {
        name: "products",
        path: "products",
        component: Products,
      },
      {
        name: "product create",
        path: "products/create",
        component: ProductCreate,
      },
      {
        name: "product details",
        path: "/products/create",
        component: ProductDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  },
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes,
});

export default router;
