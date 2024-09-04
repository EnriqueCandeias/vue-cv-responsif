import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MyProjects from '../views/MyProjects.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/MyProjects', name: 'MyProjects', component: MyProjects },
  { path: '/AboutMe', name: 'AboutMe', component: AboutMe },
  { path: '/Contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
