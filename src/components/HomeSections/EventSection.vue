<template>
  <section class="events">
    <h1>Our Spectacular Show</h1>

    <!-- FLEX BOX for desktop -->
    <div v-show="!isTablet" class="event-cards flexbox-layout">
      <router-link
        v-for="event in events"
        :key="event.id"
        :to="{
          name: 'EventView',
          params: { id: event.id },
          query: { eventData: JSON.stringify(event) },
        }"
        class="card-link"
      >
        <EventCard
          :imgUrl="getImageUrl(event.image)"
          :location="event.location"
          :title="event.name"
          :description="event.brief"
        />
      </router-link>
    </div>

    <!-- Slider for mobile -->
    <swiper
    class="swiper-layout"
    :modules="[Navigation, Autoplay]"
    v-show="isTablet"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :autoplay="{delay:3000,disableOnInteraction: false, pauseOnMouseEnter: true}"
    :speed="3000"
    navigation
    >
      <swiper-slide v-for="event in events" :key="event.id">
        <router-link
          :to="{
            name: 'EventView',
            params: { id: event.id },
            query: { eventData: JSON.stringify(event) },
          }"
          class="card-link"
        >
          <EventCard
            class="event-card"
            :imgUrl="getImageUrl(event.image)"
            :location="event.location"
            :title="event.name"
            :description="event.brief"
          />
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import eventData from "@/assets/data/events.json";
import EventCard from "../EventCard.vue";
import { Autoplay, Navigation } from  'swiper/modules'; // Import the Navigation module


export default {
  components: { Swiper, SwiperSlide, EventCard },
  setup() {
    return {
      Navigation,Autoplay 
    };
  },
  data() {
    return {
      events: eventData.events,
      screenWidth: window.innerWidth, // Track screen width
      isTablet: window.innerWidth < 800, // isTablet set based on screenWidth
      isMobile: window.innerWidth < 500, // isMobile set based on screenWidth
    };
  },
  computed: {
    // Dynamically compute slidesPerView based on screen width
    slidesPerView() {
      if (this.isMobile) {
        return 1; // 1 card for screens < 500
      } else if (this.isTablet) {
        return 2; // 2 cards for screens < 800
      } else {
        return 3; // 3 cards for screens larger than 800px
      }
    },
    // Dynamically compute spaceBetween based on screen width
    spaceBetween() {
      if (this.isMobile) {
        return 128; // Less space for mobile
      } else {
        return 2; // More space for tablets and desktops
      }
    },
  },
  methods: {
    getImageUrl(imagePath) {
      return require("@/assets/images/" + imagePath);
    },
    // Update screenWidth and isMobile on window resize
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      this.isTablet = this.screenWidth < 800;
      this.isMobile = this.screenWidth < 500;
    },
  },
  mounted() {
    // Listen for window resize events
    window.addEventListener("resize", this.updateScreenWidth);
  },
  beforeDestroy() {
    // Cleanup resize event listener when component is destroyed
    window.removeEventListener("resize", this.updateScreenWidth);
  },
};
</script>


<style scoped lang="scss">
.events {
  width: 100%;
  height: fit-content;
  background-color: $black;
  color: white;

  h1 {
    padding-bottom: 24px;
    text-align: center;
  }

  /* Flexbox Layout for large screens */
  .flexbox-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Space between cards */
    justify-content: center;

    .event-card {
      flex: 1 0 30%; /* Adjust card size as needed */
      max-width: 400px;
    }
  }

  /* Swiper Layout for smaller screens */
  .swiper-layout {
    width: 100%;
    height: 60vh; /* Adjust height as needed */
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .card-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        max-width: 100%;
        margin: 0 8px;
        .event-card {
          flex: 1;
          height: 100%;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: $h1-mobile;
  }
}
</style>
