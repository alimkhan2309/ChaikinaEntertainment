<template>
  <section class="events">
    <h1>Our Spectacular Show</h1>
    <div class="event-cards"> <!-- flex-container --> 
        <router-link  v-for="event in events" 
        :key="event.id"
        :to="{ name: 'EventView', 
               params: { id: event.id},
               query: { eventData: JSON.stringify(event) } }"
        class="card-link"
        >
            
            <EventCard
            :imgUrl="getImageUrl(event.image)"
            :location="event.location"
            :title="event.name"
            :description="event.brief"
            ></EventCard>
        </router-link>
    </div>
  </section>
</template>

<script>
import eventData from '@/assets/data/events.json'
import EventCard from '../EventCard.vue';

export default {
    components: {EventCard},
    data() {
        return {
            events: eventData.events,
        }
    },
    methods: {
        getImageUrl(imagePath){
            return require(`@/assets/images/${imagePath}`);
        }
    }
}
</script>

<style scoped lang="scss">
.events {
    width: 100%;
    height:fit-content;
    background-color:$black;
    color:white;
    flex-direction: column;
    gap:128px;
    
    h1 {
        padding:$vertical-padding 0;
        inline-size: 100vw;
        text-align: center;
    }
    .event-cards {
        width: 100%;
    
        justify-content: center;
        align-items: stretch;
        gap:64px;
        flex-wrap: wrap;
        margin-top:128px;
        display: flex;
        overflow-x:hidden;
        box-sizing: border-box;

        &::-webkit-scrollbar {
            height: 8px; // Visible scrollbar height
        }
        &::-webkit-scrollbar-thumb {
            background: $yellow; // Customize the scrollbar color
            border-radius: 4px;
        }
        &::-webkit-scrollbar-track {
            background: $dark; // Background of scrollbar track
        }
        
        .card-link {
            text-decoration: none;
        }
    }
}
@media (max-width: 1200px) {
    .events {
        // padding:$vertical-padding 80px;

        .event-cards {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 45%;
            overscroll-behavior-inline: contain;
            overflow-x:auto;
            padding-bottom: 36px;
        }
    }
}
@media (max-width: 800px) {
    .events {
        // height:80%;
        // padding:106px 32px;
        .event-cards {
            margin:0px;
            grid-auto-columns: 62%;
        }
    }
}

@media (max-width: 500px) {

    
    .events {
        // padding:106px 8px;

        h1 {
            font-size: $h1-mobile;
            padding: 64px 0px 0px 24px;
            width:fit-content;
            text-align: start;
        }
        .event-cards {
            grid-auto-columns: 61%;
            // height:fit-content;

            // .card-link {height:fit-content;}
        }
    }
}
</style>