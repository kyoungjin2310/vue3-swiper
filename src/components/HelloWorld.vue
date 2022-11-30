<template>
  <div>
    <swiper
      :pagination="true"
      :modules="modules"
      class="mySwiper"
      @swiper="onSwiper"
    >
      <swiper-slide><date-view /> </swiper-slide>
      <!-- <swiper-slide><date-vuetify /> </swiper-slide> -->
      <!-- <swiper-slide>
        <menu-wrap />
      </swiper-slide> -->
      <swiper-slide>
        <custom-date />
      </swiper-slide>
      <swiper-slide>
        <lang-view />
      </swiper-slide>
      <!-- <swiper-slide>
        <time-picker />
      </swiper-slide> -->
      <swiper-slide>
        <add-tag />
      </swiper-slide>
    </swiper>
    <button @click="nextSlide">Next</button>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import 'v-calendar/dist/style.css';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import DateView from './DateView.vue';
// import DateVuetify from './DateVuetify.vue';
// import MenuWrap from './MenuWrap.vue';
import LangView from './LangView.vue';
// import TimePicker from './TimePicker.vue';
import AddTag from './AddTag.vue';
import CustomDate from './CustomDate.vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
    DateView,
    // DateVuetify,
    // MenuWrap,
    LangView,
    // TimePicker,
    AddTag,
    CustomDate,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      swiper: null,
      length: 0,
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
      console.log(swiper);
      this.length = swiper.slidesGrid.length - 1;
    },
    nextSlide() {
      console.log(this.swiper.activeIndex);
      if (this.length === this.swiper.activeIndex) {
        this.$router.push('/login');
      } else {
        this.swiper.slideTo(this.swiper.activeIndex + 1);
      }
    },
  },
};
</script>
<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
