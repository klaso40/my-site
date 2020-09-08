<template>
  <div>
    <div class="my-card-title">
      <img :src="imgPath" alt="" />
      <h2>{{ title }}</h2>
    </div>
    <p>
      Wafer gummies tart pie pie chocolate. Macaroon jelly lollipop chupa chups
      cake gummies. Fruitcake pudding icing sweet roll toffee donut icing
      topping. Oat cake danish cupcake jujubes cake dragée jujubes bonbon.
      Gingerbread ice cream wafer soufflé icing tart bear claw cake. Muffin
      caramels caramels sesame snaps tart bonbon powder ice cream. Fruitcake
      cookie jelly-o donut. Topping pudding liquorice gingerbread bonbon pie.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imgPath: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.my-card-title {
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  align-items: center;
  img {
    width: 70px;
  }
}
</style>
