<template>
  <div class="product-bar">
    <!-- <button class="product-btn--pay">付款</button> -->
    <!-- <span class="product-count">总数量：{{ allMoney }}</span> -->
    <span class="product-price">总金额：{{ allMoney }}</span>
    <!-- <button class="product-btn--clean">清空购物车</button> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allMoney"]),
  },
};
</script>

<style>
.product-btn--pay {
  margin-right: 10px;
}
.product-count {
  margin-right: 10px;
}
.product-btn--clean {
  margin-left: 10px;
}
</style>