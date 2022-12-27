<template>
  <div>
    <div class="header">
      <div>
        <img class="header__menuIcon" src="../../assets/svg/burger-desk.svg" alt="burger">
        <img src="../../assets/svg/search.svg" alt="search">
      </div>
      <Logo/>
      <div>
        <img class="header__phoneIcon" src="../../assets/svg/phone.svg" alt="phone">
        <img src="../../assets/svg/card.svg" alt="card">
      </div>
    </div>
    <Menu/>
  </div>
</template>

<script>
import Logo from '../Logo'
import Menu from './Menu'

export default {
  components: {
    Logo,
    Menu
  },
  name: 'Header'
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 33px;

    &__menuIcon {
      margin-right: 40px;
     }
    &__phoneIcon {
      margin-right: 37px;
     }
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 576px) {

  }
</style>
