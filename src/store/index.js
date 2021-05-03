import Vue from 'vue';
import Vuex from 'vuex';
import getters from "@/store/getters";

Vue.use(Vuex);
const store = new Vuex.Store({
    // 属性 state,mutations,getter
    state: {
        count: 0
    },
    // 保存修改共享数据
    mutations: {
        increment(state) {
            state.count++
        }
    },
    // store 的计算属性,只会被执行一次
    getters


})

// this.$store.state.count引用
// this.$store.commit('increment') 修改
// this.$store.getters.formart
// 例如对state对象中添加一个age成员
// Vue.set(state,"age",15)
// 将刚刚添加的age成员删除
// Vue.delete(state,'age')
// Actions来专门进行异步操作，最终提交mutation方法。
;
