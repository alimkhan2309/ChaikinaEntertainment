<template>
  <meta name="theme-color" content="#040203">

  <Navbar></Navbar>
  <hero-section></hero-section>
  <about-section></about-section>
  <event-section></event-section>
  <testimonial-section></testimonial-section>
  <team-section></team-section>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AboutSection from '@/components/HomeSections/AboutSection.vue';
import HeroSection from '@/components/HomeSections/HeroSection.vue';
import EventSection from '@/components/HomeSections/EventSection.vue';
import TestimonialSection from '@/components/HomeSections/TestimonialSection.vue';
import TeamSection from '@/components/HomeSections/TeamSection.vue';
import Footer from '@/components/Footer.vue';
// @ is an alias to /src import HelloWorld from '@/components/HelloWorld.vue'
// navbar
// event card
// team card
// event json
// team json
// buttons
// form
// footer

export default {
  name: 'HomeView',
  components: {
    HeroSection, AboutSection,
    EventSection,TestimonialSection,
    TeamSection, Navbar,Footer,
  },
  data() {
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 800; // Dynamically update breakpoint
    },
  },
}
</script>

<style scoped>

</style>
