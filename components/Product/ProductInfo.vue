<template>
  <div class="productContainer">
    <div class="productInfo">
      <div class="title">
        <img src="../../assets/svg/omega-title.svg" alt="omega-title">
        <div class="title__info">з вітамінами А і D3</div>
      </div>
      <ProductTabs/>
      <div class="priceBlock">
        <div class="drugPrice">
          <div class="drugInfo">
            <img src="../../assets/svg/drugs-two.svg" alt="drugs">
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
        <div class="productBlock">
          <div class="count">
            <div class="count__minus"
                 @click="removeProductToCart"
            >
              <button>
                <img src="../../assets/svg/minus.svg" alt="minus">
              </button>
            </div>
            <div class="count__numb">{{ productCount }}</div>
            <div class="count__plus"
                 @click="addProductToCart"
            >
              <button>
                <img src="../../assets/svg/plus.svg" alt="plus">
              </button>
            </div>
          </div>
          <button class="productBlock__button"
                  @click="addProductToCart"
          >До кошика</button>
          <button class="productBlock__button productBlock__buttonWithPrice"
                  @click="addProductToCart"
          >До кошика 489 ₴</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTabs from './ProductTabs'
import {mapActions, mapState} from 'vuex';

export default {
  name: 'ProductInfo',
  components: {
    ProductTabs,
  },
  computed: {
    ...mapState('cart', ['productCount']),
  },
  methods: {
    ...mapActions('cart', ['decreaseProductCount', 'increaseProductCount']),
    addProductToCart() {
      this.increaseProductCount(this.productCount)
    },
    removeProductToCart() {
      this.decreaseProductCount(this.productCount)
    }
  }
}

</script>

<style lang="scss">
.productContainer {
  font-family: 'Onest', sans-serif;
  width: 634px;
}

.title {
  display: flex;
  margin: 96px 0 32px 0;

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
    position: relative;
    color: rgba(0, 40, 79, 0.3);
    font-style: normal;
    font-weight: 900;
    font-size: 28px;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-bottom: 2px solid #1D1D1B;
      transform: skewY(18deg);
    }
  }
}

.productBlock {
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
  &__buttonWithPrice {
    display: none;
  }
}

.count {
  display: flex;
  align-items: center;

  button:not(:disabled) {
    border: none;
    background: none;
    padding: 0;
  }

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

.ant-tabs-bar {
  margin: 0 0 16px 0;
  border-bottom: 1px solid rgba(0, 40, 79, 0.3);
}

.ant-tabs-nav .ant-tabs-tab:hover {
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #00284F;
}

.ant-tabs .ant-tabs-top-content {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #00284F;
}

@media (max-width: 768px) {
  .title {
    margin: 40px 0 32px 0;

    &__info {
      padding: 10px 24px;
      width: 258px;
      height: 32px;;
      font-weight: 500;
      font-size: 22px;
    }
  }

  .productBlock {
    margin-bottom: 56px;

    &__button {
      display: block;
    }

    &__buttonWithPrice {
      display: none;
    }
  }

  .productContainer {
    width: 100%;
  }

  .count {
    display: flex;
    align-items: center;

    &__minus {
      margin: 0 26px;
    }

    &__plus {
      margin: 0 26px;
    }
  }
}

@media (max-width: 576px) {
  .title {
    flex-direction: column;

    img {
      width: 318px;
    }

    &__info {
      margin-top: 4px;
    }
  }

  .count {
    display: none;
  }

  .price {
    display: none;
  }

  .drugPrice {
    flex-direction: column-reverse;
    margin-bottom: 32px;
  }

  .priceBlock {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .productBlock {
    margin-bottom: 32px;

    &__button {
      display: none;
    }

    &__buttonWithPrice {
      display: block;
    }
  }
}
</style>
