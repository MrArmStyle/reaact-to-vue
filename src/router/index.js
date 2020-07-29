import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/rooms",
    name: "About",
    component: () => import("../views/Rooms.vue"),
  },
  {
    path: "/rooms/:slug",
    name: "SingleRoom",
    component: () => import("../views/SingleRoom.vue"),
  },
  {
    path: "",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
