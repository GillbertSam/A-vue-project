import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart,
      meta: {
        showTabBar: true
      }
    },
    {
      path: '/News/NewsList',
      name: 'News.NewsList',
      component: NewsList
    },
    {
      path: '/News/NewsDetail',
      name: 'News.NewsDetail',
      component: NewsDetail
    }
  ]
})
