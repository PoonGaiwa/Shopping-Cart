<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-27 21:48:57
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-28 16:53:37
 * @FilePath: \shopping_cart\src\components\ShoppingCart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="shopping-cart">
    <div class="shopping-cart--head">
      <h2>购物车</h2>
    </div>
    <ul class="shopping-cart--content">
      <ProductListItem
        v-for="product in cartList"
        :key="product.id"
        :product="product"
      />
    </ul>
    <div class="shopping-cart--foot">
      <p>总价：{{ allMoney }}</p>
      <button @click="cleanCart">清空购物车</button>
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShoppingCart",
  components: {
    ProductListItem,
  },
  computed: {
    ...mapGetters(["cartList", "allMoney"]),
  },
  methods: {
    ...mapActions(["cleanCart"]),
  },
};
</script>

<style>
.shopping-cart {
  position: fixed;
  top: 50px;
  left: 50px;
  width: 450px;
  height: 400px;
  box-shadow: 0 0 4px #222;
}
.shopping-cart--head {
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
}
.shopping-cart--content {
  margin: 80px 0;
}
.shopping-cart--foot {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 80px;
}
.shopping-cart--foot > p {
  margin-right: 10px;
}
.shopping-cart--foot > button {
  padding: 4px;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 16px;
}

.shopping-cart--foot > button:hover {
  border: 1px solid #333;
}
</style>