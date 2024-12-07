<template>
  <div class="btn flex-container">
    <h5>Create Your Dream Event</h5>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .btn {
        width:fit-content;
        align-items: center;
        justify-content: center;
        padding: 16px 64px;
        color:$yellow;
        border: solid 1px $yellow;
        border-radius: 64px;
        margin-top:96px;
    }

    @media(max-width:800px) {
        .btn {
            padding:16px 32px;
            h5 {
                font-size:20px;
            }
        }
    }

    @media(max-width:500px) {
        .btn {
            padding:16px 26px;
        }
    }
</style>