import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "TheUser",
      component: () => import("./../views/TheUser.vue"),
      children: [
        {
          path: "/",
          name: "TheUserHome",
          component: () => import("../pages/user/TheUserHome.vue"),
        },
        {
          path: "/:id",
          name: "TheUserSingle",
          component: () => import("../pages/user/TheUserSingle.vue"),
        },
      ],
    },
  ],
});

export default router;
