<template>
  <div class="container">
    <h1>App development</h1>
    <div class="columns">
      <div class="column">
        <img src="~/assets/app-development.svg" alt="" />
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
        <CardComponent
          title="SwiftUI"
          :img-path="require('~/assets/swift.svg')"
        />
      </div>
      <div class="column">
        <CardComponent
          title="Flutter"
          :img-path="require('~/assets/flutter.svg')"
        />
      </div>
    </div>
    <h1>Moje aplikácie</h1>
    <MyAppComponent />
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import MyAppComponent from '../components/MyAppComponent.vue'
export default {
  components: {
    CardComponent,
    MyAppComponent,
  },
}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
