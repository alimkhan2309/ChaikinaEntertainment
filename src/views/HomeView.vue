<template>
  <Navbar></Navbar>
  <hero-section></hero-section>
  <about-section></about-section>
  <event-section></event-section>
  <testimonial-section></testimonial-section>
  <team-section></team-section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AboutSection from '@/components/HomeSections/AboutSection.vue';
import HeroSection from '@/components/HomeSections/HeroSection.vue';
import EventSection from '@/components/HomeSections/EventSection.vue';
import TestimonialSection from '@/components/HomeSections/TestimonialSection.vue';
import TeamSection from '@/components/HomeSections/TeamSection.vue';
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
    TeamSection, Navbar,
  }
}
</script>
