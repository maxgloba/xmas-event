<template>
  <section class="tickets">
    <Snowfall :visible="true" :count="300" :prefix="'tickets'" />
    <div class="container">
      <div class="tickets-wrap inverse">
        <h2 class="tickets-wrap-title text-xls w800">
          Plus You Can Even Get A Free Ticket <br />
          To Any GeekOut Event In 2022
        </h2>
        <p class="text-lg tickets-wrap-subtitle"><b>Here’s How It Works</b></p>
        <div class="tickets-wrap-content">
          <Ticket :ticketObj="ticketOne" />
          <Ticket :ticketObj="ticketTwo" />
          <Ticket :ticketObj="ticketThree" />
        </div>
      </div>
      <div class="tickets-bottom">
        <img src="@/assets/img/christmas/everyone.png" alt="" />
        <p class="w300 text-_xxxl">
          Who Orders Today <b class="w600">Gets These Sick Bonuses</b> From Our
          Sponsors
        </p>
      </div>
    </div>
    <div class="tickets-snow">
      <img src="@/assets/img/christmas/ticket-snow.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ticketOne: {
        ticket_text: '<b>First 25</b> people <br>  who order today',
        title: 'Get A FREE Ticket<br> To Any GeekOut in 2022',
      },
      ticketTwo: {
        ticket_text: '<b>First 26-50</b>  people <br> who order today',
        title: 'Get a $2,5k Discount<br> To Any GeekOut in 2022',
      },
      ticketThree: {
        ticket_text: '<b>The remaining 51-100</b><br>  who order today',
        title: 'Get $1k Discount<br> To Any GeekOut in 2022',
      },
    }
  },
}
</script>

<style scoped lang="scss">
.tickets {
  position: relative;
  background-image: radial-gradient(
    100% 100% at 50% 0%,
    #d71929 12.31%,
    #a40001 100%
  );
  background-size: cover;
  &-wrap {
    &-title {
      text-transform: uppercase;
      margin-bottom: 70px;
      text-align: center;
      @include _lg {
        margin-bottom: 25px;
      }
    }
    &-subtitle {
      margin-bottom: 70px;
      text-align: center;
      @include _lg {
        margin-bottom: 25px;
      }
    }
    &-content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      @include _xl {
        flex-direction: column;
        align-items: center;
      }
      img {
        width: 100%;
      }
      ul {
        margin-right: 60px;
        max-width: 40%;
        li {
          margin-bottom: 40px;
        }
      }
    }
    margin-bottom: 200px;
    @include _lg {
      margin-bottom: 150px;
    }
    @include _md {
      margin-bottom: 70px;
    }
  }
  &-snow {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -4px;
    z-index: 9;
    img {
      width: 100%;
      height: auto;
      @include _lg {
        width: 150%;
      }
      @include _sm {
        width: 300%;
        max-height: 250px;
      }
      @include _xs {
        width: 350%;
      }
    }
  }
  &-bottom {
    width: 100%;
    img {
      transition: 0.5s ease-in;
      width: 100%;
      @include _lg {
        margin-bottom: 50px;
      }
      &:hover {
        transition: 0.5s ease-in;
        transform: translate(0, -130px);
        @include _lg {
          transform: translate(0, 0px);
        }
      }
    }
    p {
      z-index: 12;
      max-width: 1070px;
      text-transform: uppercase;
      margin-bottom: 50px;
      @include _lg {
        margin-bottom: 0px;
        margin-top: 50px;
      }
      &:hover {
        color: #d71929;
      }
    }
  }
}
</style>
