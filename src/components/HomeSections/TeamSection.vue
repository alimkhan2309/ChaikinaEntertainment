<template>
<section class="team-section flex-container">
    <h1>Meet Our Team</h1>
    <div class="team-cards">
      <router-link
        v-for="(team, index) in teams"
        :key="index"
        :to="{ name: 'TeamView', params: { id: index }, query: { teamName: team.name } }"
        class="team-link"
      >
        <TeamCard :title="team" />
      </router-link>
    </div>
</section>  
</template>

<script>
import TeamCard from '../TeamCard.vue';

export default {

    components: {TeamCard},
    data() {
        return {
            teams: ["Dancers", "Comedian", "Aerialists"],
        }   
    },
}
</script>

<style scoped lang="scss">
.team-section {
    height:fit-content;
    width:100vw;
    flex-direction: column;
    background-color:$black;
    flex-direction: column;
    color:$white;

    h1 {
        padding:32px 24px;
    }

    .team-link {
        text-decoration: none;
    }
}

.team-cards {
    // background-color:$dark;
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    height:fit-content;
    gap:16px;
    flex-direction: row;
}

@media(max-width:500px) {
    h1 {
        font-size:50px;
    }
}
</style>