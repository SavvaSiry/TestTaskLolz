<template>
  <header class="header">
    <div class="wrapper">
      <div class="logo">
        <span class="logo-text">Post App</span>
      </div>
      <nav class="navigation">
        <span><router-link to="/">Главная</router-link></span>
        <span><router-link to="/admin">Администрирование</router-link></span>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
.header {
  padding: 10px 40px;
  background-color: #333;
  color: #fff;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;

      .logo {
        margin-bottom: 10px;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: auto;
      margin-right: 10px;
    }

    .logo-text {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .navigation {
    display: flex;

    span {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>