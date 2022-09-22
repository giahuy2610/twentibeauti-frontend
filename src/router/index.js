import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "../layouts/AppLayout.vue";
import HomeStore from "../pages/store/home/HomeStore.vue";
import NotFound from "../pages/404/404.vue";
import BrandsPage from "../pages/store/brands/Brands.vue";
import CategoriesPage from "../pages/store/categories/Categories.vue"
import CollectionsPage from "../pages/store/collections/Collections.vue";

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
        name: "categories",
        path: "/categories/{id}",
        components: CategoriesPage,
      },
      {
        name: "collections",
        path: "/collections/{id}",
        components: CollectionsPage,
      }
    ],
  },
  {
    name: "admin",
    path: "/admin",
    component: AppLayout,
    children: [
      {
        name: "dashboard",
        path: "",
        component: HomeStore,
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
