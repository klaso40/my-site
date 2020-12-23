<template>
  <div>
    <h1>Technológie, s ktorými pracujem každý deň</h1>
    <div class="columns">
      <div class="column"><img src="~/assets/vue.svg" alt="vue" /></div>
      <div class="column"><img src="~/assets/nuxt.svg" alt="nuxt" /></div>
      <div class="column"><img src="~/assets/vuetify.svg" alt="vuetify" /></div>
      <div class="column"><img src="~/assets/javascript.svg" alt="JS" /></div>
    </div>
    <div class="columns">
      <div class="column"><img src="~/assets/laravel.svg" alt="laravel" /></div>
      <div class="column"><img src="~/assets/flutter.svg" alt="flutter" /></div>
      <div class="column"><img src="~/assets/swift.svg" alt="swift" /></div>
      <div class="column"><img src="~/assets/sass.svg" alt="sass" /></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.columns {
  margin-top: 50px;
  justify-content: space-between;
  .columns:first-child {
    margin-bottom: 30px;
  }
  .column {
    text-align: center;
  }
}
img {
  height: 100px;
}
@media (max-width: 768px) {
  .columns {
    text-align: center;
    .babel,
    .npm {
      width: 260px;
    }
  }
}
</style>
