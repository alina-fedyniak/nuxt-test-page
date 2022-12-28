<template>
  <div class="menu">
    <ul class="nav justify-content">
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

.justify-content {
  justify-content: center;
}

.nav {
  --bs-nav-link-padding-x: 20px 0;
  --bs-nav-link-padding-y: 0;
}

@media (max-width: 768px) {
  .menu {
    margin-bottom: 64px;
  }

  .nav {
    --bs-nav-link-padding-x: 0;
  }

  .justify-content {
    justify-content: space-between;
  }
}

@media (max-width: 576px) {
  .menu {
    display: none;
  }
}
</style>
