/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Eventlist from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "event-list",
        component: Eventlist
    },
    {
        path: "/event/:id",
        name: "event-show",
        component: EventShow,
        props: true
    },
    {
        path: "/event/create",
        name: "event-create",
        component: EventCreate
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;