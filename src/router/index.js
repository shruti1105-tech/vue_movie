import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Popular_movie from "../views/Popular_movie";
import Trending_movie from "../views/Trending_movie";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Popular_movie',
        name: 'Popular_movie',
        component: Popular_movie
    },
    {
        path: '/Trending_movie',
        name: 'Trending_movie',
        component: Trending_movie
    },
    {
        path: '/movie/:id',
        name: 'Movie Details',
        component: MovieDetail
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
