<template>
  <section class="second">
    <div class="container">
      <div class="second-wrap">
        <h2 class="second-wrap-title text-xls w800">
          All The 2021 GeekOut Live… <br />
          For Almost 40% Less Than The Price of One Event
        </h2>
        <div class="second-wrap-content">
          <ul class="w300 text-lg">
            <li>
              You read that right. All of the trainings you are about to get
              were given by the top speakers at our GeekOut events for 2021.
            </li>

            <li>
              In case you don’t know anything about GeekOut, it’s the premier,
              high-level event for all aspects of ecommerce.
            </li>

            <li>
              We’re talking about scaling on various platforms like Facebook,
              TikTok, Snapchat, and Google (just to name a few)
            </li>

            <li>
              Churning out winning creative after winning creative whether
              that’s short form copy, long form, video and everything else in
              between.
            </li>

            <li>
              We also have presentations on supply chains, building incredible
              teams when it’s time to grow, as well as automating your business
              through SOP’s.
            </li>

            <li>
              It’s the A-Z, soup to nuts training and education to build wildly
              profitable ecomm businesses.
            </li>
          </ul>
          <div>
            <img src="@/assets/img/christmas/main_img.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.second {
  &-wrap {
    &-title {
      text-transform: uppercase;
      margin-bottom: 87px;
      text-align: center;
    }
    &-content {
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      @include _xl {
        flex-direction: column;
        align-items: center;
      }
      img {
        width: 100%;
        transition: all 0.3s ease;
        &:hover {
          transition: all 0.3s ease;
          transform: rotate(-3deg);
        }
      }
      ul {
        margin-right: 60px;
        max-width: 40%;
        padding: 0 30px;
        @include _xl {
          max-width: 100%;
          margin-right: 0px;
        }
        li {
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>
