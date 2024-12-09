<template class="team-card">
  <div class="card">
    <div class="img-wrapper">
        <img src="" alt="">
    </div>
    <h4>
        {{ title }}
    </h4>
  </div>
</template>

<script>
export default {
    props: ['title'],
}
</script>

<style scoped lang="scss">
.card {
    color:$white;
    width:400px;
    aspect-ratio: 16/25;
    // height:626px;
    flex-basis: 30%;
    background-color: $dark;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-basis: 30%;
    border-radius: 22px;
    flex-grow:1;

    h4 {
        padding-top:32px;
    }
    .img-wrapper {
        width: 100%;
        height: 80%;
        overflow: hidden;
        border-radius: 22px 22px 0 0;
        border-color:grey;
        position: relative;
        background-color:grey;
        img {
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            object-position: center; 
        }
    }
}

@media (max-width: 1200px) {
    .card {
        width:45vw;
    }
}
@media (max-width: 800px) {
    .card {
        width:65vw;
    }
}

@media (max-width: 500px) {
    .card {
        width:175px;

        h4 {
            font-size:24px;
            padding-bottom:32px;
        }
    }
}

</style>