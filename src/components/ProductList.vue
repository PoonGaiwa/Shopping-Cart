<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-27 21:48:25
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-27 23:22:33
 * @FilePath: \shopping_cart\src\components\ProductList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="product-page">
    <ul class="product-list">
      <ProductListItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
    <ProductBar />
  </div>
</template>

<script>
import ProductBar from "./ProductBar.vue";
import ProductListItem from "./ProductListItem.vue";
import DATA_PRODUCT from "../core/DATA_PRODUCT";
export default {
  name: "ProductList",
  components: {
    ProductBar,
    ProductListItem,
  },
  data() {
    return {
      products: DATA_PRODUCT,
    };
  },
};
</script>

<style>
.product-page {
  width: 600px;
}
.product-list {
  list-style: none;
}
</style>