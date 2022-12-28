<template>
  <div class="delivery">
    <div class="delivery__block delivery__free">
      <img src="../assets/svg/free-car.svg" alt="free">
      <div>Безкоштовна доставка від 1800 грн</div>
    </div>
    <div class="delivery__block delivery__package">
      <img src="../assets/svg/package.svg" alt="package">
      <div>Відправки в день оформлення замовлення до 16:00</div>
    </div>
    <div class="delivery__block delivery__return">
      <img src="../assets/svg/return-money.svg" alt="return">
      <div>Гарантія повернення грошових коштівн</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Delivery',
}

</script>

<style lang="scss">
.delivery {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 56px;
  gap: 10px;
  max-width: 1296px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.54) 100%);
  border-radius: 15px;

  &__block {
    display: flex;
  }

  &__free {
    div {
      max-width: 220px;
    }

    img {
      margin-right: 24px;
      width: 56px;
    }
  }

  &__package {
    div {
      max-width: 264px;
    }

    img {
      margin-right: 34px;
      width: 34px;
    }
  }

  &__return {
    div {
      max-width: 220px;
    }

    img {
      margin-right: 24px;
      width: 56px;
    }
  }
}

@media (max-width: 768px) {
  .delivery {
    padding: 38px 56px;

    img {
      margin-bottom: 24px;
    }

    &__block {
      flex-direction: column;
      align-items: center;
    }

    &__free {
      div {
        width: 156px;
      }
    }

    &__package {
      div {
        width: 216px;
      }
    }

    &__return {
      div {
        width: 156px;
      }
    }
  }
}

@media (max-width: 576px) {
  .delivery {
    padding: 38px 33px;
    flex-direction: column;

    &__block {
      margin-bottom: 26px;
      align-self: flex-start;
      flex-direction: row;
      align-items: center;
    }

    &__free {
      img {
        margin: 0 45px 0 0;
      }
    }

    &__package {
      img {
        margin: 0 62px 0 0;
      }
    }

    &__return {
      img {
        margin: 0 45px 0 0;
      }
    }
  }
}
</style>
