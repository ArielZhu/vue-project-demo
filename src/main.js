import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App) //创建实例

// 全局过滤器
// app.config.globalProperties.$filters = {
//   prefix(url) {
//     if (url && url.startsWith('http')) {
//       return url
//     } else {
//       url = `http://47.99.134.126:28019${url}`
//       return url
//     }
//   }
// }

app.use(router)
app.use(store)

app.mount('#app')
