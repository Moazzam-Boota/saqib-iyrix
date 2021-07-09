import Vue from "vue";
import VueRouter from "vue-router";
import CoachesList from "../pages/coaches/CoachesList.vue";
import CoachesDetails from "../pages/coaches/CoachesDetail.vue";
import Registeration from "../pages/coaches/CoachRegisteration.vue";
import RequestRecieved from "../pages/requests/RequestRecieved.vue";
import ContactCoach from "../pages/requests/ContactCoach.vue";
import NotFound from "../pages/NotFound.vue";
import Login from "../pages/coaches/Login.vue";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  //{
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    //   path: "/",
    //   redirects: "/coaches",
    // },
    // {
    path: "/",
    component: CoachesList,
  },
  {
    path: "/coaches/:id",
    props: true,
    component: CoachesDetails,
    children: [{ path: "contact", component: ContactCoach }], // /coaches/id/contact
  },
  {
    path: "/register",
    component: Registeration,
  },
  {
    path: "/requests",
    component: RequestRecieved,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
