import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyServe from '@/components/MyServe'
import MyGoods from '@/components/MyGoods'
import MyNews from '@/components/MyNews'
import my from '@/components/my'
import Search from '@/components/Search'
import Dress from '@/components/Dress'
import Idx from '@/components/idx'
import no2 from '@/components/good.vue'
import no3 from '@/components/no3.vue'
import publish from '@/components/publish.vue'
import kin from '@/components/kin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Idx',
      component: Idx,
      children: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }, {
        path: '/no2',
        name: 'MyServe',
        component: MyServe
      }, {
        path: '/no3',
        name: 'MyGoods',
        component: MyGoods
      }, {
        path: '/no4',
        name: 'MyNews',
        component: MyNews
      }, {
        path: '/no5',
        name: 'my',
        component: my
      }]
    }, {
      path: '/s1',
      name: 'Dress',
      component: Dress
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, { path: '/amply', name: 'no2', component: no2 },
    { path: '/settle', name: 'no3', component: no3 }, {
      path: '/publish', name: 'publish', component: publish
    }, {
      path: '/kin', name: 'kin', component: kin
    }
  ]
})
