<template>
  <div class="card">
    <div class="img-wrapper">
        <img :src="imgUrl" alt="Event image">
    </div>
    <div class="card-content">
        <div class="card-header">
            <h5>{{ title }}</h5>
            <div class="tag"><p>{{ location }}</p></div>
        </div>
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
    display: flex;
    // flex-basis: 30%;
    max-width:482px;
    height:100%;
    background-color: $dark;
    border-radius: 22px;
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

        .card-header {
            display:flex;
            justify-content: space-between;
            align-items:start;
            .tag {
                color: $yellow;
                font-size:10px;
                width:fit-content;
                height: fit-content;
                margin-top:16px;
                padding:8px 32px;
                border-radius: 23px;
                border: solid 1px $yellow;
                p {font-size:13px; }
            }
            
            h5{padding:8px 0;}
        }

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
        width:392px;

        .card-content {
            padding:24px 16px 4px 16px;
            display: flex;
            flex-direction: column;
            gap:32px;
            
        .tag {
            padding:4px 12px;
            p {font-size:12px; }
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

@media (max-width: 500px) {
    .card {
        width: 21.5625rem;
        width: clamp(21.5625rem, -4.5000000000000036rem + 111.20000000000002vw, 30.25rem);
    }
}

</style>