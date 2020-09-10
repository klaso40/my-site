<template>
  <div class="container">
    <h1>Životopis</h1>
    <div class="columns">
      <div class="column">
        <h2>Vzdelanie</h2>
        <TimeLine year="2016" school="SOS Stara Tura" />
        <TimeLine year="2020" school="Masarykova univerzita" />
        <div class="img-container">
          <img src="~/assets/astronaut-space.svg" alt="" class="astronaut" />
          <img src="~/assets/teaching.svg" alt="" class="teaching" />
        </div>
      </div>
      <div class="column">
        <h2>Zručnosti</h2>
        <CardComponent title="Vue.js" :img-path="require('~/assets/vue.svg')" />
        <CardComponent
          title="Nuxt.js"
          :img-path="require('~/assets/nuxt.svg')"
        />
        <CardComponent
          title="Vuetify"
          :img-path="require('~/assets/vuetify.svg')"
        />
        <CardComponent
          title="Laravel"
          :img-path="require('~/assets/laravel.svg')"
        />
        <CardComponent
          title="SwiftUI"
          :img-path="require('~/assets/swift.svg')"
        />
        <CardComponent
          title="Flutter"
          :img-path="require('~/assets/flutter.svg')"
        />
      </div>
    </div>
    <OtherTechnologies />
  </div>
</template>

<script>
import TimeLine from '../components/TimeLine'
import CardComponent from '../components/CardComponent'
import OtherTechnologies from '../components/OtherTechnologies'
export default {
  components: {
    TimeLine,
    CardComponent,
    OtherTechnologies,
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;

  .astronaut {
    height: 400px;
    margin: 50px 0;
  }
  .teaching {
    height: 400px;
    margin: 50px 0;
  }
}
.columns {
  h2 {
    text-align: center;
  }
}
</style>
