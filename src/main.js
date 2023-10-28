/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-27 21:47:06
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-28 16:31:17
 * @FilePath: \shopping_cart\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$bus = new Vue()
// 构建数据仓库
const store = new Vuex.Store({
  state: {
    cartProducts: [
    ],
  },
  getters: {
    cartList(state) {
      return state.cartProducts
    },
    allMoney(state) {
      return Math.floor(state.cartProducts.reduce((acc, curr) => {
        return acc + Number(curr.price) * Number(curr.quantity)
      }, 0))
    },
    getProductById: (state) => (id) => {
      let idx = state.cartProducts.findIndex(product => product.id === id)
      if (idx === -1) {
        // 商品不在购物车 返回0
        return 0
      }
      return state.cartProducts[idx].quantity
    }
  },
  mutations: {
    // 新增购物车商品
    NEW_PRODUCT(state, product) {
      state.cartProducts.push({ ...product, quantity: 1 })
    },
    // 添加购物车商品
    ADD_PRODUCT(state, idx) {
      state.cartProducts[idx].quantity++
    },
    // 减少购物车商品
    SUB_PRODUCT(state, idx) {
      state.cartProducts[idx].quantity--
    },
    // 删除购物车商品
    DELETE_PRODUCT(state, idx) {
      state.cartProducts.splice(idx, 1)
    },
    // 清除商品
    CLEAN_PRODUCT(state) {
      state.cartProducts = []
    }
  },
  actions: {
    addProduct({ commit, state }, product) {
      let { id } = product
      let idx = state.cartProducts.findIndex(item => item.id === id)
      if (idx === -1) {
        commit('NEW_PRODUCT', product)
      }
      if (idx !== -1) {
        commit('ADD_PRODUCT', idx)
      }
      console.log('添加成功');
    },
    subProduct({ commit, state }, product) {
      let { id } = product
      let idx = state.cartProducts.findIndex(item => item.id === id)
      if (idx === -1) {
        console.log('商品不存在');
        return false
      }
      commit('SUB_PRODUCT', idx)
      if (state.cartProducts[idx].quantity <= 0) {
        commit('DELETE_PRODUCT', idx)
        console.log('商品剔除');
      }
      console.log('减少成功');
    },
    cleanCart({ commit }) {
      commit('CLEAN_PRODUCT')
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
