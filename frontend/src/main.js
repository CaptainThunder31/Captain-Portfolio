import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import components
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount app
createApp(App).use(router).mount('#app')