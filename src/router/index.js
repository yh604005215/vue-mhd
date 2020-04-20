import Vue from 'vue'
import VueRouter from 'vue-router'

import Favorite from '../views/Favorite'
import History from '../views/History'
import Classify from '../views/Classify'
import Detail from '../views/Detail'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import More from '../views/More'
import Ranking from '../views/Ranking'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
import MyCenter from '../views/MyCenter'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/favorite', component: Favorite },
    { path: '/history', component: History },
    { path: '/classify', component: Classify },
    { path: '/detail', component: Detail },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/more', component: More },
    { path: '/ranking', component: Ranking },
    { path: '/search', component: Search },
    { path: '/search-result', component: SearchResult },
    { path: '/Vip', component: Vip },
    { path: '/my-center', component: MyCenter },
    { path: '/', redirect: '/home' }
  ]
})

export default router
