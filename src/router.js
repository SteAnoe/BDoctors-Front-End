import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
// import ProjectList from './pages/ProjectList.vue';
// import SingleProject from './pages/SingleProject.vue';
// import NotFound from './pages/NotFound.vue';
// import Contacts from './pages/Contacts.vue';
// import About from './pages/About.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        name: 'home',
        component: AppHome
    },
    // {
    //     path: '/projects',
    //     name: 'projects',
    //     component: ProjectList
    // },
    // {
    //     path: '/projects/:slug',
    //     name: 'SingleProject',
    //     component: SingleProject
    // },
    // {
    //     path: '/:pathMatch(.)',
    //     name: 'NotFound',
    //     component: NotFound
    // },
    // {
    //     path: '/contacts',
    //     name: 'contacts',
    //     component: Contacts
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: About
    // }
]
});
export { router };