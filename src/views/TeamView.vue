<template>
  <div class="team-view">
    <h1>Team Details</h1>
    <h2>{{ teamName }}</h2>
    <p>Team ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: {
    teamName: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.team-view {
  text-align: center;
  margin-top: 50px;
}

.team-view h1 {
  font-size: 32px;
}

.team-view h2 {
  font-size: 24px;
  color: #555;
}

.team-view p {
  font-size: 18px;
  color: #777;
}
</style>
