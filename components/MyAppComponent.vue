<template>
  <div class="columns">
    <div class="column">
      <img src="~/assets/WS-List.png" alt="" />
    </div>
    <div class="column">
      <h2>WS List</h2>
      <p>
        Wafer gummies tart pie pie chocolate. Macaroon jelly lollipop chupa
        chups cake gummies. Fruitcake pudding icing sweet roll toffee donut
        icing topping. Oat cake danish cupcake jujubes cake dragée jujubes
        bonbon. Gingerbread ice cream wafer soufflé icing tart bear claw cake.
        Muffin caramels caramels sesame snaps tart bonbon powder ice cream.
        <br />
        <br />
        Fruitcake cookie jelly-o donut. Topping pudding liquorice gingerbread
        bonbon pie. Marzipan oat cake ice cream cake. Fruitcake lemon drops
        sugar plum oat cake chocolate lollipop bear claw chupa chups. Sweet
        halvah lemon drops sweet roll tootsie roll jelly. Chocolate bar icing
        soufflé tart. Bonbon cotton candy cookie cake. Cookie oat cake brownie.
      </p>

      <StoreButton
        :img-path="require('~/assets/google-play.svg')"
        title="GET IT ON"
        description="Google play"
        link=""
      />
      <StoreButton
        :img-path="require('~/assets/apple.svg')"
        title="Donwload on the"
        description="App Store"
        link=""
      />
    </div>
  </div>
</template>

<script>
import StoreButton from '../components/StoreButton.vue'
export default {
  components: {
    StoreButton,
  },
}
</script>

<style lang="scss" scoped>
.columns {
  background: #22324b;
  border-radius: 10px;
  padding: 30px 20px;
  .column {
    img {
      height: 700px;
    }
  }
}
p {
  margin: 60px 0;
}
</style>
