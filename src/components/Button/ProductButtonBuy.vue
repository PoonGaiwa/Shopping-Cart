<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-27 21:49:13
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-28 16:18:40
 * @FilePath: \shopping_cart\src\components\Button\ProductButtonBuy.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="product-item--change">
    <button
      v-show="quantity > 0"
      class="product-btn--sub"
      @click="subProduct(product)"
    >
      -</button
    >{{ quantity
    }}<button class="product-btn--add" @click="addProduct(product)">+</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductButtonBuy",
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    quantity() {
      return this.$store.getters.getProductById(this.product.id);
    },
  },
  methods: {
    // 将vuex中actions的方法混入
    ...mapActions(["addProduct", "subProduct"]),
  },
};
</script>

<style>
.product-item--change > button {
  margin: 0 10px;
  height: 40px;
  width: 40px;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
}
</style>