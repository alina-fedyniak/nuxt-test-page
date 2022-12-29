<template>
  <div class="productInfoContainer">
    <ProductInfo/>
    <ProductSlider/>
  </div>
</template>

<script>

import ProductSlider from "~/components/Product/ProductSlider";
import ProductInfo from "~/components/Product/ProductInfo";

export default {
  name: 'ProductContainer',
  components: {
    ProductSlider,
    ProductInfo,
  },
}

</script>

<style lang="scss">
.productInfoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .productInfoContainer {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
