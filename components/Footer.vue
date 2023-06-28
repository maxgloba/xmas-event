<template>
  <footer class="footer text-sm w400">
    <div class="container">
      <div class="footer-content">
        <img src="@/assets/img/christmas/logo.svg" />
        <p class="footer-content-copyright">
          All Rights Reserved - Geekout {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
  background: #000000;
  padding: 60px 0;
  color: #ffffff;
  @include _md {
    padding: 20px 0;
  }
  &-content {
    display: flex;
    align-items: center;
    @include _md {
      flex-direction: column;
    }
    img {
      width: 100%;
      max-width: 130px;
      max-height: 70px;
      @include _md {
        margin-bottom: 20px;
        max-width: 80px;
      }
    }
    &-copyright {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
