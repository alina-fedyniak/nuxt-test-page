<template>
  <div class="sliderContainer">
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/1_cod.png" class="d-block w-100" alt="drug-img">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/2_cod.png" class="d-block w-100" alt="drug-img">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/3_cod.png" class="d-block w-100" alt="drug-img">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/4_cod.png" class="d-block w-100" alt="drug-img">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/5_cod.png" class="d-block w-100" alt="drug-img">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CartSlider',
}

</script>

<style lang="scss">
.sliderContainer {
  width: 746px;
}

.carousel-control-next {
  right: -28px;
  top: 476px;
}

.carousel-control-prev {
  left: 500px;
  top: 476px;
}

@media (max-width: 768px) {
  .sliderContainer {
    width: 396px;
  }

  .carousel-control-next {
    right: -168px;
    top: 0;
  }

  .carousel-control-prev {
    left: -168px;
    top: 0;
  }
}

@media (max-width: 576px) {
  .sliderContainer {
    width: 285px;
  }

  .carousel-control-next {
    right: -65px;
    top: 0;
  }

  .carousel-control-prev {
    left: -65px;
    top: 0;
  }
}
</style>
