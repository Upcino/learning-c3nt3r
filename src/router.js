import { createRouter, createWebHistory } from "vue-router";
import home from "@/shared/presentation/views/home.vue";
import about from "@/shared/presentation/views/about.vue";

const pageNotFoundRoute = () => import("@/shared/presentation/views/page-not-found.vue");

const routes =[
    {
        path: "/home", name: "home"
    }
]

