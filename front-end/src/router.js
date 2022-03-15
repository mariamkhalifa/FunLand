import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import Home from "./views/home.vue";
import AttractionsList from "./views/attractions-list.vue";
import Attraction from "./views/attraction.vue";
import About from "./views/about.vue";
import Contact from "./views/contact.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/attractions",
      component:  AttractionsList
    },
    {
      path: "/attraction/:id", 
      component: Attraction
    },
    {
      path: "/about",
      component:  About
    },
    {
      path: "/contact",
      component:  Contact
    },
  ]
});
