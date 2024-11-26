<template>
  <div class="card">
    <div class="img-wrapper">
        <!-- <img src="@/assets/images/hero.jpg" alt="Event image"> -->
        <img :src="imgUrl" alt="Event image">
    </div>
    <div class="card-content">
        <div class="tag"><p>{{ location }}</p></div>
        <h5>{{ title }}</h5>
        <ul>
            <li v-for="(d,i) in description" :key="i">{{ d }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props: ["imgUrl","location", "title", "description"],

    
}
</script>

<style scoped lang="scss">
.card {
    flex-basis: 30%;
    max-width:482px;
    height:100%;
    background-color: $dark;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    flex-grow:1;
    
    
    // gap:32px;
    
    .img-wrapper {
        width: 100%;
        height: 256px;
        overflow: hidden;
        border-radius: 22px 22px 0 0;
        position: relative;
        
        img {
            width: 100%; 
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    
    .card-content {
        color:$white;
        padding:32px;
        display: flex;
        flex-direction: column;
        gap:32px;
        flex-grow:1;
        .tag {
            color: $yellow;
            font-size:10px;
            width:fit-content;
            padding:16px 32px;
            border-radius: 23px;
            border: solid 1px $yellow;
            p {font-size:13px; }
        }
        
        h5{padding:8px 0;}

        p {
            font-size:16px;
        }
        ul {list-style: none;}
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
        width:275px;

        .card-content {
            padding:32px;
            display: flex;
            flex-direction: column;
            gap:32px;
            
        .tag {
            padding:4px 7px;
            p {font-size:6px; }
        }
        
        h5{
            font-size:18px;
            padding:8px 0;}

        p {
            font-size:8px;
        }
        
    }
    }
}

</style>