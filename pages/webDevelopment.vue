<template>
  <div class="container">
    <h1>Web development</h1>
    <div class="columns">
      <div class="column">
        <img src="~/assets/web-development.svg" alt="" />
      </div>
      <div class="column intro">
        <p>
          Sesame snaps apple pie sesame snaps chocolate pastry jelly halvah
          lollipop croissant. Topping jujubes dragée oat cake sweet cake tootsie
          roll. Chocolate tart chocolate chocolate bar chupa chups. Jelly
          gingerbread marzipan jelly-o. Halvah tiramisu fruitcake pudding
          chocolate chocolate cake sweet roll biscuit. Cupcake pie jelly.
          Lollipop tart tiramisu pastry cake croissant.
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column">
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
      </div>
      <div class="column img-column">
        <img src="~/assets/rocket.svg" alt="" class="rocket" />
        <img src="~/assets/town.svg" alt="" class="town" />
        <img
          src="~/assets/laravel_and_vue.svg"
          alt=""
          class="laravel-and-vue"
        />
      </div>
    </div>
    <OtherTechnologies />
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import OtherTechnologies from '../components/OtherTechnologies.vue'
export default {
  components: {
    CardComponent,
    OtherTechnologies,
  },
}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.img-column {
  display: flex;
  flex-direction: column;
  .rocket {
    height: 300px;
  }

  .town {
    height: 300px;
    margin: 80px 0;
  }
  .laravel-and-vue {
    height: 350px;
  }
}
</style>
