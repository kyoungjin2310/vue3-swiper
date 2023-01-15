import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import VSlide from "@/components/VSlide.vue";
import store from "@/store/index";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/login", component: VSlide },
  ],
  strict: true,
});

router.beforeEach(function (to, from, next) {
  //auth
  if (
    to.matched.some(function (routeInfo) {
      store.state.loading = true;
      return routeInfo.meta.authRequired;
    }) &&
    !store.state.token
  ) {
    store.state.reLogin = true;
  } else {
    store.state.reLogin = false;
    store.state.loading = false;
    next();
  }

  //token있을 경우
  if (
    to.matched.some(function (routeInfo) {
      store.state.loading = true;
      return routeInfo.meta.homeTo;
    }) &&
    store.state.error !== -803 &&
    store.state.token
  ) {
    //에러 없어서 정상루트
    store.state.loading = false;
    router.push("/home");
    next();
  } else {
    if (store.state.error === -803) {
      //만료 token 없애기
      //deleteAllLocalStorage();
      store.state.token = null;
    }
    store.state.loading = false;
    next();
  }
});
