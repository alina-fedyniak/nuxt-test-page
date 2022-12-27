<template>
  <div class="cartContainer">
    <div class="cartInfo">
      <div class="title">
        <img src="../assets/svg/omega-title.svg" alt="omega-title">
        <div class="title__info">з вітамінами А і D3</div>
      </div>
      <Tabs/>
      <div class="drugPrice">
        <div class="drugInfo">
          <img src="../assets/svg/drugs-two.svg" alt="drugs">
          <div class="drugInfo__text">
            <div>
              В упаковці:
            </div>
            <div>
              120 капсул по 500 мг
              1 місяць прийому
            </div>
          </div>
        </div>
        <div class="price">
          <span class="price__sale">963 ₴</span>
          <span class="price__normal">489 ₴</span>
        </div>
      </div>
      <div class="cardBlock">
        <div class="count">
          <div class="count__minus">-</div>
            <div class="count__numb">1</div>
          <div class="count__plus">+</div>
        </div>
        <button class="cardBlock__button">До кошика</button>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '../components/Tabs'

export default {
  name: 'CartInfo',
  components: {
    Tabs,
  },
}

</script>

<style lang="scss">
  .cartContainer{
    max-width: 634px;
  }
  .title {
   display: flex;
    margin: 111px 0 32px 0;
    img {
      margin-right: 24px;
    }
    &__info {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 12px;
      width: 306px;
      height: 38px;
      background: #FFFFFF;
      border-radius: 50px;
      font-family: 'Onest', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 22px;
      color: #00284F;
    }
  }
  .drugPrice {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;
  }
  .drugInfo {
    display: flex;
    img {
      margin-right: 32px;
    }
    &__text {
      width: 187px;
    }
  }
  .price {
    &__normal {
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      margin-left: 24px;
    }

    &__sale {
      color: rgba(0, 40, 79, 0.3);
      text-decoration: line-through;
      font-style: normal;
      font-weight: 900;
      font-size: 28px;
    }
  }
  .cardBlock {
    margin-bottom: 121px;
    display: flex;
    justify-content: space-between;

    &__button {
      width: 416px;
      height: 56px;
      background: #69C522;
      border-radius: 40px;
      border: none;
      color: #FFFFFF;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
    }
  }

  .count {
    display: flex;
    align-items: center;

    &__minus {
      margin: 0 21px;
      width: 12px;
      color: rgba(0, 40, 79, 0.4);
    }

    &__plus {
      margin: 0 21px;
      width: 12px;
      color: rgba(0, 40, 79, 0.4);
    }

    &__numb {
      width: 46px;
      height: 46px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 7px;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #00284F;
    }
  }
</style>
