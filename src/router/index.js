import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddEmployee from "../views/AddEmployee.vue";
import AddOrder from "../views/Order/AddOrder.vue";
import Settings from "../views/Settings.vue";
import Help from "../views/Help.vue";
import AdminLogin from "../views/AdminLogin.vue";
import UserLogin from "../views/User/UserLogin.vue";
import AllOrder from "../views/Order/AllOrders.vue";
import UserView from "../views/User/UserView.vue";
import OrderStatus from "../views/Order/OrderStatus.vue";
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login admin",
      component: AdminLogin,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/employee/add",
          name: "employee add",
          component: AddEmployee,
        },
        {
          path: "/order/add",
          name: "order add",
          component: AddOrder,
        },
        {
          path: "/order/all",
          name: "order all",
          component: AllOrder,
        },
        {
          path: "/order/:id",
          name: "one order",
          component: OrderStatus,
        },
        {
          path: "/settings",
          name: "settings",
          component: Settings,
        },
        {
          path: "/help",
          name: "help",
          component: Help,
        },
      ],
    },
    {
      path: "/signin",
      name: "login user",
      component: UserLogin,
      children: [
        {
          path: "/myorder",
          name: "user order",
          component: UserView,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
