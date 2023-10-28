<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-27 21:48:40
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-28 16:04:20
 * @FilePath: \shopping_cart\src\components\ProductListItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <li class="product-item">
    <div class="product-item--info">
      <span>名称：{{ product.name }}</span>
      <span>单价：{{ product.price }}</span>
    </div>
    <ProductButtonBuy :product="product" />
  </li>
</template>

<script>
import ProductButtonBuy from "./Button/ProductButtonBuy.vue";
export default {
  name: "ProductListItem",
  components: {
    ProductButtonBuy,
  },
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    productPrice() {
      return this.product.price;
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
</style>