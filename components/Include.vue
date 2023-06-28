<template>
  <div class="include">
    <ul class="test-lg w600 inverse">
      <li v-for="include in includes" :key="include.text">
        <div>{{include.text}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['includes'],
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.include {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      width: 33.33333333%;
      transition: all 0.3s ease;
      @include _md {
         width: 50%;
      }
      @include _sm {
         width: 100%;
      }
      div {
        border: 5px solid #ffffff;
        background: #e41f30;
        padding: 44px;
        height: 100%;
        text-align: center;
      }
      &:hover {
        transition: all 0.3s ease;
        div {
          background: linear-gradient(
            180deg,
            #fdf3aa -27.65%,
            #fbf5ac -13.2%,
            #f1eaa4 -5.31%,
            #daba6c 48.17%,
            #c6a350 92.6%,
            #cba751 100%
          );
        }
      }
    }
  }
}
</style>
