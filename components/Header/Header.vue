<template>
  <div>
    <div class="header">
      <div>
        <img class="header__menuIcon" src="../../assets/svg/burger-desk.svg" alt="burger">
        <img src="../../assets/svg/search.svg" alt="search">
      </div>
      <Logo/>
      <div class="header__countCircleBlock">
        <img class="header__phoneIcon" src="../../assets/svg/phone.svg" alt="phone">
          <span class="countCircle">{{ productCount }}</span>
          <img class="header__cardIcon" src="../../assets/svg/card.svg" alt="card">
      </div>
    </div>
    <Menu/>
  </div>
</template>

<script>
import Logo from './Logo'
import Menu from './Menu'
import {mapState} from 'vuex';

export default {
  components: {
    Logo,
    Menu
  },
  name: 'Header',
  computed: {
    ...mapState('cart', ['productCount']),
  },
}
</script>

<style lang="scss">
.header {
  font-family: 'Onest', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 36px;
  span {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #F5F352;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -21px;
    top: -11px;
    font-weight: 500;
    font-size: 14px;
    color: #1D1D1B;
    z-index: 1;
  }
  &__countCircleBlock {
    position: relative;
  }

  &__menuIcon {
    margin-right: 40px;
  }

  &__phoneIcon {
    margin-right: 37px;
  }
}

@media (max-width: 576px) {
  .header {
    padding-bottom: 57px;
    span {
      width: 14px;
      height: 14px;
      right: -8px;
      top: -5px;
      font-size: 8px;
    }

    &__menuIcon {
      margin-right: 15px;
    }

    &__phoneIcon {
      margin-right: 17px;
    }
  }
}
</style>
