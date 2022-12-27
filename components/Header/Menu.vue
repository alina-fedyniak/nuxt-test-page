<template>
  <div class="menu">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Омега-3</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Вітаміни</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Добавки</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Доставка</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Про нас</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Menu'
}
</script>

<style lang="scss">
  .menu {
    font-family: 'Onest', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    margin-top: 46px;
    a {
      color: #1D1D1B;
    }
  }

</style>
