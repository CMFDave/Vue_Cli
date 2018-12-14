import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 載入 HardenDown 組件，命名為 HardenDown
import HardenDown from '@/components/HardenDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 綁定 HardenDown 組件到 /down 路徑上
    {
      path: '/down',
      name: 'HardenDown',
      component: HardenDown
    }
  ]
})
