<template>
  <section class="testimonial flex-container">
      <div class="container flex-container">
        <h1>What Our Clients Say</h1>
        <div class="reviews flex-container">
            <div 
            v-for="(review, index) in reviews"
            :key="index"
            class="review flex-container">
                <p>{{ review.text }}</p>
                <div class="star-rating">
                    <span v-for="n in 5" :key="n" class="star">★</span>
                </div>
                <h6>{{ review.name }}</h6>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews: {
        review1: {
          name: "Alice Johnson",
          text: "The event was absolutely amazing! The performers were captivating, and the entire production was flawless."
        },
        review2: {
          name: "Michael Lee",
          text: "An unforgettable experience! Every detail was thoughtfully executed, and the show was incredibly entertaining."
        },
        review3: {
          name: "Sophia Martinez",
          text: "I was blown away by the creativity and energy of the performances. Definitely attending again!"
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
.testimonial {
    height: fit-content; 
    padding: $vertical-padding 0px;
    width:100%;
    background-color:$black;
    flex-direction: column;
    color:$white;
    
    .container {
        width: 83vw;
        background-color:$dark;
        flex-wrap:wrap;
        flex-direction: column;
        color:white;
        padding-bottom: 100px;
        border-radius: 56px;
        padding-inline:26px;

        h1 {
        padding: $vertical-padding 0px;
    }
        
        .reviews {
            flex-wrap:wrap;
            gap:48px;
            // padding:0 100px;
        
            .review {
                width:426px;
                height:426px;
                border:solid 4px $yellow; 
                flex-direction: column;
                text-align: center;
                font-size:24px;

                .star-rating {
                    display: flex;
                    gap: 5px; /* Space between stars */
                    margin-top: 10px; /* Adjust as needed */
                }

                .star {
                    color: gold; /* Star color */
                    font-size: 24px; /* Adjust star size */
                }

                p {font-size:24px;padding:64px 48px}
            }
        }
    }
}
@media (max-width: 500px) {

    .testimonial {
    
    .container {
      background-color:$black;
      
      h1 {
          font-size:50px;
          padding:0;
          padding:64px 0px;
        }

        .reviews {
          .review {
            width:100%;
        }
        }
    }
  }
}

</style>