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
          name: "TheHome",
          component: () => import("../pages/user/TheUserHome.vue"),
        },
      ],
    },
  ],
});

export default router;
