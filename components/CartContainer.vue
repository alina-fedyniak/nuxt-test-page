<template>
  <div class="cartInfoContainer">
    <CartInfo/>
    <CartSlider/>
  </div>
</template>

<script>

import CartSlider from "~/components/CartSlider";
import CartInfo from "~/components/CartInfo";

export default {
  name: 'CartContainer',
  components: {
    CartSlider,
    CartInfo,
  },
}

</script>

<style lang="scss">
.cartInfoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .cartInfoContainer {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
