import { createRouter, createWebHistory } from "vue-router";
import { useIndexAdminStorePinia } from "../stores/admin/index.js";
import { useCartStorePinia } from "../stores/store/cart.js";
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
import AccountPromotions from "../pages/store/account/components/MyPromotions.vue";
import AccountOrderDetails from "../pages/store/account/components/OrderDetails.vue";
//admin
import AdminLayout from "../layouts/AdminLayout.vue";
import Dashboard from "../pages/admin/dashboard/Dashboard.vue";
import Products from "../pages/admin/products/Products.vue";
// import ProductDetail from "../pages/admin/products/ProductDetail.vue";
import ListOrders from "../pages/admin/orders/ListOrders.vue";
import OrderDetails from "../pages/admin/orders/OrderDetails.vue";
import FormAddress from "../pages/admin/orders/components/FormAddress.vue";
import ProductCreate from "../pages/admin/products/create/ProductCreate.vue";
import Promotion from "@/pages/admin/promotions/Promotion.vue";
import CodePromotion from "../pages/admin/promotions/CodePromotion.vue";
import CodePromotionCreate from "../pages/admin/promotions/CodePromotionCreate.vue";
import EventPromotion from "../pages/admin/promotions/EventPromotion.vue";
import EventPromotionCreate from "../pages/admin/promotions/EventPromotionCreate.vue";
import EditOrder from "../pages/admin/orders/EditOrder.vue";
import OrderReturn from "../pages/admin/orders/OrderReturn.vue";
import CreateReturn from "../pages/admin/orders/CreateReturn.vue";
import AdminLoginPage from "../pages/admin/login/LoginAdminPage.vue";
import ThemeHandling from "../pages/admin/themeHandling/ThemeHandling.vue";
//import AdminPromotion from "../pages/admin/promotion/AdminPromotion.vue";
import AdminCollections from "../pages/admin/collections/AdminCollections.vue";
import CollectionCreate from "../pages/admin/collections/create/CollectionCreate.vue";
import ListCus from "../pages/admin/customer/ListCus.vue";
import DetailCustomer from "../pages/admin/customer/DetailCustomer.vue";
import AdminSupportPage from "../pages/admin/support/SupportPage.vue";
import AdminAdvertisingPage from "../pages/admin/advertising/AdvertisingPage.vue";
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
        path: "/details",
        component: AccountOrderDetails,
      },

      {
        name: "account",
        path: "/account",
        component: Account,
        children: [
          {
            path: "",
            redirect: { path: "account/profile" },
          },
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
            component: AccountPromotions,
          },
        ],
        meta: {
          requiresStoreAuth: true,
        },
      },
      {
        name: "checkout",
        path: "/checkout",
        component: Checkout,
        meta: {
          requiresStoreAuth: true,
        },
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
        name: "promotions",
        path: "promotions",
        component: Promotion,
        children: [
          {
            path: "",
            redirect: { path: "promotions/code" },
          },
          {
            name: "code promotion",
            path: "code",
            component: CodePromotion,
          },
          {
            name: "event promotion",
            path: "event",
            component: EventPromotion,
          },
        ],
      },

      {
        name: "code promotion create",
        path: "promotions/code/create",
        component: CodePromotionCreate,
      },

      {
        name: "event promotion create",
        path: "promotions/event/create",
        component: EventPromotionCreate,
      },
      {
        name: "list orders",
        path: "listorders",
        component: ListOrders,
      },
      {
        name: "order details",
        path: "orderdetails",
        component: OrderDetails,
      },
      {
        name: "form address",
        path: "formaddress",
        component: FormAddress,
      },
      {
        name: "edit",
        path: "orderdetails/editorder",
        component: EditOrder,
      },
      {
        name: "customer refund",
        path: "order-return",
        component: OrderReturn,
      },
      {
        name: "create return",
        path: "create-return",
        component: CreateReturn,
      },
      {
        name: "theme handling",
        path: "theme-handling",
        component: ThemeHandling,
      },
      {
        name: "collections",
        path: "collections",
        component: AdminCollections,
      },
      // {
      //   name: "promotion",
      //   path: "promotion",
      //   component: AdminPromotion,
      // },
      {
        name: "support",
        path: "support",
        component: AdminSupportPage,
      },
      {
        name: "advertising",
        path: "advertising",
        component: AdminAdvertisingPage,
      },
      {
        name: "customer",
        path: "customer",
        component: ListCus,
      },
      {
        name: "customerdetails",
        path: "customerdetails",
        component: DetailCustomer,
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "admin login",
    path: "/admin-login",
    component: AdminLoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  },
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes,
});
router.beforeEach((to, from, next) => {
  const storeAdmin = useIndexAdminStorePinia();
  const store = useCartStorePinia();
  if (!storeAdmin.isLoggedIn && to.meta.requiresAuth) {
    next({
      name: "admin login",
      query: {
        nextUrl: to.fullPath,
      },
    });
  } else if (store.user == null && to.meta.requiresStoreAuth) {
    next({
      name: "home",
    });
  } else {
    next();
  }

  console.log(store.isLoggedIn);
  next();
});
export default router;
