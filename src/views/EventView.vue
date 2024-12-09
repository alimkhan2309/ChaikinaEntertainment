<template>
  <section class="event">
    <h1>{{event.name}}</h1>

    <div class="content-wrap">
        <div class="txt-wrap flex-container">
            <div class="info-line">
                <div class="icon"><h1></h1></div>
                <div class="info">
                    <h6>The Brief</h6>
                    <ul>
                        <li
                        v-for="(b,i) in event.brief" :key="i"> {{ b }} </li>
                    </ul>
                </div>
            </div>
            <div class="info-line">
                <div class="icon"><h1></h1></div>
                <div class="info">
                    <h6>The Difficulties</h6>
                    <ul>
                        <li v-for="(difficulty, index) in event.difficulties" :key="index">{{ difficulty }}</li>
                    </ul>
                </div>
            </div>
            <div class="info-line">
                <div class="icon"><h1></h1></div>
                <div class="info">
                    <h6>The Result</h6>
                    <ul v-if="event.result.type==='text'">
                        <li v-for="(item, index) in event.result.items" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="img-wrap">
            <img src="event.imgUrl" alt="">
        </div>
    </div>
  </section>
</template>

<script>
export default {
    created() {
    try {
      this.event= JSON.parse(this.$route.query.eventData)
    } catch (error) {
      console.error('Failed to parse event data from query:', error);
    }
  },
}
</script>

<style scoped lang="scss">

.event {
    width: 100vw;
    height: fit-content;
    background-color:$dark;
    display: flex;
    flex-direction: column;
    padding-top: $vertical-padding;
    color:$white;
    align-items: center;
    font-size:$body;
    
    // h1 {
    //     width:100%;
    // }

    .content-wrap {
        // padding:0px $horizontal-padding;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        // width:83vw;
        width:93vw;
        height:fit-content;


        .txt-wrap {
            width: 46vw;
            width: 877px;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;

            .info-line {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding:32px;
                gap:16px;
                // background-color:aquamarine;
                .icon {
                    padding:64px;
                    background-color:rgb(122, 122, 122);
                }
                .info{
                    h6 {font-size:16px;font-weight:bolder;}

                    ul {
                        list-style: none;
                        li {margin:8px 0}
                    }
                }
            }
        }

        .img-wrap {
            width:514px;
            height:761px;
            background-color:grey;
        }
    }
}
</style>