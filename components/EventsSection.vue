<template>
  <section class="events">
    <div class="container">
      <div class="events-wrap">
        <h2 class="events-wrap-title text-xls w800">
          Now You Can Get Access <br />
          To All Previous GeekOut Live Recordings For 2021
        </h2>
        <p class="events-wrap-subtitle text-lg w300">
          That’s 5 Events of inner-circle marketing knowledge with 60+
          presentations full of knowledge bombs that are relevant to all online
          businesses in this day and age.
        </p>
        <div class="events-wrap-content">
          <Event :eventObj="eventOne" />
          <Event :eventObj="eventTwo" />
          <Event :eventObj="eventThree" />
          <Event :eventObj="eventFour" />
          <Event :eventObj="eventFive" />
        </div>
        <div class="events-wrap-btn">
          <Button :btnObj="btnEvent" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      btnEvent: {
        text_one: 'Buy',
        text_two: 'All',
        text_three: 'Now',
        link: 'https://learning.geekoutevents.io/offers/RUfTty6w/checkout',
        all: true,
      },
      eventOne: {
        img: 'event_1',
        title_one: 'GeekOut',
        title_two: 'Miami',
        pre_price: '',
        price: '',
        list: [
          {
            text: ' - Building the ROAS Royce',
            speaker: 'Jordan Menard',
          },
          {
            text: ' - How to improve eCommerce online experience to convert more sales in 2021',
            speaker: 'Sergii Popovych',
          },
          {
            text: ' - Overclock Your Brain',
            speaker: 'Rich Schefren',
          },
          {
            text: ' - Full Stack Media Buyer',
            speaker: 'Maor “The Wolf” Benaim',
          },
          {
            text: ' - How to build a killer copy team… even if you never learned to read.',
            speaker: 'Julian Reyes & Andrew Contreras',
          },
          {
            text: ' - Advanced eCom Email Tactics',
            speaker: 'Joshua Chin',
          },
          {
            text: ' - Snapchat Mastery',
            speaker: 'Van Oakes',
          },
          {
            text: ' - What Makes A Successful Team?',
            speaker: 'John Hefter / Brandon Hendrix',
          },
          {
            text: ' - YouTube Ads 2021: From Zero to Scale',
            speaker: 'Ian Nagy',
          },
          {
            text: ' - How To Create High Converting Creatives Effortlessly	- ',
            speaker: 'Cody Iverson',
          },
          {
            text: ' - Omnichannel and How to Use it to Scale Your Business',
            speaker: 'Brandon Adcock',
          },
          {
            text: ' - Conversations and Sales in Ecommerce',
            speaker: 'Billy McClennan',
          },
          {
            text: ' - Repetitive Creativity',
            speaker: 'James Van Elswyk',
          },
        ],
      },
      eventTwo: {
        img: 'event_2',
        title_one: 'GeekOut',
        title_two: 'San Diego',
        pre_price: '',
        price: '',
        list: [
          {
            text: ' - Organic Advertising',
            speaker: 'Van Oakes',
          },
          {
            text: ' - Protecting Your Business in 2021 What You Need to Know about Advertising Law',
            speaker: 'Robert Freund',
          },
          {
            text: ' - Sharma Brands',
            speaker: 'Nik Sharma',
          },
          {
            text: ' - Full Stack Media Buyer',
            speaker: 'Maor “The Wolf” Benaim',
          },
          {
            text: ' - How to Scale With Amazon Ads',
            speaker: 'Kiefer Godfrey',
          },
          {
            text: ' - Elevating Customer Experience For eCommerce Growth',
            speaker: 'Julia Whatley',
          },
          {
            text: ' - Building the ROAS Royce',
            speaker: 'Jordan Menard',
          },
          {
            text: ' - Building a Resilient Brand with Conversion Rate Optimization',
            speaker: 'Jon MacDonald',
          },
          {
            text: ' - Facebook Ads Right Now: The Best Way To Light Your Money on Fire',
            speaker: 'John Coyle',
          },
          {
            text: ' - High Performing Culture & People',
            speaker: 'John Hefter / Brandon Hendrix',
          },
          {
            text: ' - GeekOut 2021 Scaling teamsRemote VS Office',
            speaker: 'Lazar Žepinić',
          },
          {
            text: ' - Two For Ones',
            speaker: 'James Van Elswyk',
          },
          {
            text: ' - The Contradicting Killer Content Strategy That Trumps IOS14',
            speaker: 'Cody Iverson',
          },
        ],
      },
      eventThree: {
        img: 'event_3',
        title_one: 'GeekOut Ukraine',
        title_two: '(Main Event)',
        pre_price: '',
        price: '',
        list: [
          {
            text: ' - How To Create High Converting Creatives Effortlessly',
            speaker: 'Cody Iverson (Viscap)',
          },
          {
            text: ' - The Giveaway Model And How It Built An 8 Figure Business',
            speaker: 'Van Oakes',
          },
          {
            text: ' - Are You A Giver Or Taker',
            speaker: 'John Hefter / Brandon Hendrix',
          },
          {
            text: ' - The Smarter Way of Raising Capital',
            speaker: 'Samir El-Sabini',
          },
          {
            text: ' - 2021 Traffic Hacks For All Major Channels',
            speaker: 'Maor "The Wolf" Benaim',
          },
          {
            text: ' - $20k to $500k on Amazon. Real Strategies for 2021 Growth',
            speaker: 'Todor Minev',
          },
          {
            text: ' - Driving Retention & Conversion Through Customer Experience',
            speaker: 'Louis Lavedan',
          },
          {
            text: "Youtube's Top Performing Creative",
            speaker: 'Brat Vukovich & Ian Nagy',
          },
          {
            text: ' - Facebook Ads in 2021 - A Practical Account Progression',
            speaker: 'Jordan Menard',
          },
        ],
      },
      eventFour: {
        img: 'event_4',
        title_one: 'GeekOut Ukraine',
        title_two: '(Tactical Training)',
        pre_price: '',
        price: '',
        list: [
          {
            text: ' - Basic YouTube Stuff, Initial Campaign Structure, Advanced Structure & Scaling Optimization',
            speaker: 'Maor "The Wolf" Benaim',
          },
          {
            text: ' - Intensive: Snapchat',
            speaker: 'Van Oakes',
          },
          {
            text: ' - Intensive: Facebook Ads',
            speaker: 'Jordan Menard',
          },
          {
            text: ' - Intensive: Native (Taboola / Outbrain)',
            speaker: 'Nadim Kuttab / Andrey Kravchenko',
          },
          {
            text: ' - YouTube Ads 2021: From Zero to Scale',
            speaker: 'Brat Vukovich & Ian Nagy',
          },
          {
            text: ' - Creating Countless Converting Creatives Effortlessly',
            speaker: 'Cody Iverson',
          },
        ],
      },
      eventFive: {
        img: 'event_5',
        title_one: 'GeekOut',
        title_two: 'Los Angeles',
        pre_price: '',
        price: '',
        list: [
          {
            text: ' - Giveaway Advertisin',
            speaker: 'Van Oakes',
          },
          {
            text: ' - E-com supply chain. How NOT to lose money ',
            speaker: 'Tim Bondarchuk',
          },
          {
            text: ' - 2021’s Greatest SMS & Mobile Plays',
            speaker: 'Tejas Konduru',
          },
          {
            text: ' - Conversations and Sales in Ecommerce',
            speaker: 'Rohan Kapoor',
          },
          {
            text: ' - The Subscription Journey',
            speaker: 'Nik Sharma',
          },
          {
            text: ' - Full Stack Media Buyer',
            speaker: 'Maor “The Wolf” Benaim',
          },
          {
            text: ' - Champagne Shoppers for Bud Light Prices',
            speaker: 'Kiefer Godfrey',
          },
          {
            text: ' - "The Ultimate Holiday Money - Maker Trio"',
            speaker: 'Josh Chin',
          },
          {
            text: ' - How To Generate Ecommerce Revenue With SEO',
            speaker: 'Kevin Miller / Jon Zacharias',
          },
          {
            text: ' - Paid Media & Ecom Wins: 2021 Edition',
            speaker: 'John Coyle',
          },
          {
            text: ' - Growth marketing strategies for exponential growth',
            speaker: 'Filip Merdic',
          },
          {
            text: ' - How to win Q4 through Creator - Generated Content, Authentic Ads',
            speaker: 'Danil Saliukov',
          },
          {
            text: ' - How to make 1 Ad Equal 100, At no extra cost ',
            speaker: 'Cody Iverson',
          },
          {
            text: ' - The Super Team',
            speaker: 'Brett Curry',
          },
          {
            text: ' - High Performing Culture & People',
            speaker: 'John Hefter / Brandon Hendrix',
          },
        ],
      },
    }
  },
}
</script>

<style scoped lang="scss">
.events {
  &-wrap {
    &-title {
      text-transform: uppercase;
      margin-bottom: 87px;
      text-align: center;
      @include _lg {
        margin-bottom: 25px;
      }
    }
    &-subtitle {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      margin-bottom: 80px;
      @include _lg {
        margin-bottom: 25px;
      }
    }
    &-content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      margin-bottom: 80px;
      .event:nth-child(odd) {
        flex-flow: row-reverse;
      }

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
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
