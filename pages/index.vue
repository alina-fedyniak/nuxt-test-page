<template>
  <div class="container-fluid mainPage">
    <div class="mainPage__freeDelivery">
      <img class="mainPage__drugsIcon" src="../assets/svg/drugs.svg" alt="drugs">
      Безкоштовна досавка від 1800 грн
      <img class="mainPage__drugsIcon" src="../assets/svg/drugs.svg" alt="drugs">
    </div>
    <div class="mainPage__container">
      <Header/>
      <CartInfo/>
      <Delivery/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import Delivery from '../components/Delivery'
import CartInfo from '../components/CartInfo'

export default {
  components: {
    Header,
    Delivery,
    CartInfo,
  },
  name: 'IndexPage'
}
</script>

<style lang="scss">
  .container-fluid {
    padding: 0;
  }
  .mainPage {
    height: 1854px;
    background: linear-gradient(180deg,
    rgba(200, 224, 149, 0.8) -5.17%,
    rgba(221, 238, 239, 0.8) 47.96%,
    rgba(255, 255, 255, 0.8) 100%);
      &__freeDelivery {
        height: 44px;
        background: #99AFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Onest', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
      }
      &__drugsIcon {
        margin: 0 14px;
      }
      &__container {
        max-width: 1296px;
        margin: 0 auto;
      }
  }

</style>
