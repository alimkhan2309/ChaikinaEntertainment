<template>
  <section class="hero">
  <div class="txt-wrap">
      <h1>CHAIKINA ENTERTAINMENT</h1>
      <h2>PERSONALIZED SHOW PRODUCTION GLOBAL TALENT RECRUITMENT</h2>
      <Button text="Create Your Dream Event" ></Button>
    </div>
  </section>
</template>

<script>
import Button from '../Button.vue';
export default {
  components: {Button}
}
</script>


<style lang="scss">

.hero {
  width:100%;
  background-image:url('@/assets/images/hero.jpg');
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background-size: cover;
  background-position: center;
  

  .txt-wrap {
    color: $white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align: center;
    width:65vw;

    h1 {
      font-size:110px;
      font-family: "Libre Baskerville", serif;
    }
    
    h2 {
      font-size: 26px;
      color: $grey;
      padding-top: 2rem;
      width:fit-content;
    }

    Button {
      margin-top:96px;
    }
  }

  // Responsive <3
  @media (max-width: 1200px) {

    background-image: url('@/assets/images/hero-small.jpg');
    
    .txt-wrap h1 {
      font-size: 65px;
    }
    .txt-wrap h2 {
      font-size: 1rem;
    }
  }
  @media (max-width: 800px) {
    .txt-wrap h1 {
      font-size:40px;
    }
    .txt-wrap h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    .txt-wrap h1 {
      font-size:1.75rem;
    }
    .txt-wrap h2 {
      font-size: .75rem;
    }
  }

}
</style>