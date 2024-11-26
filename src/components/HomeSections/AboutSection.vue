<template>
  <section class="about flex-container">
    <div class="container">
        <div class="img-wrap">
            <img src="" alt="">
        </div>

        <div class="txt-wrap flex-container">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum diam nec dolor volutpat, ut fermentum massa auctor. Phasellus at leo eu arcu dapibus pretium id ut libero. Mauris nec convallis ligula. Nunc augue velit, laoreet nec nulla vel, mattis suscipit risus. Fusce bibendum, nulla nec egestas fermentum, ex sapien aliquet elit, sed finibus dolor urna in mi. Aenean sollicitudin consequat lacus sed iaculis. Morbi rutrum nec ante sed pulvinar.</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.about {
    background-color:$black;
    height:fit-content;
    .container {
        width:80%;
        height:fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        gap:103px;
        text-align: start;
        padding:$vertical-padding $horizontal-padding;
        color:$white;
        align-items: stretch;

        .img-wrap {
            width: 514px;
            height: 346px;
            background-color: $grey;
        }

        .txt-wrap {
            flex-direction: column;
            width: 583px;
            gap:32px;
            align-items: start;
            flex-grow:1;

            h1 {
                color:$yellow;
            }
        }
    }

    

    // Responsive <3
  @media (max-width: 1200px) {
      .container {
          flex-wrap:wrap;

          h1 {
            font-size: $h2;
          }
      }
  }
  @media (max-width: 800px) {
  }

  @media (max-width: 500px) {
    .container {

          h1 {
            font-size: $h3;
          }
          p {
            font-size:14px;
          }
      }
  }
}
</style>