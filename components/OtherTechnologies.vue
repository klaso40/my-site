<template>
  <div class="my-20">
    <h1 class="heading">Technológie, s ktorými pracujem každý deň</h1>
    <div class="grid mt-16 grid-cols-2 sm:grid-cols-4 gap-4">
      <img class="m-auto" src="~/assets/vue.svg" alt="vue" />
      <img class="m-auto" src="~/assets/nuxt.svg" alt="nuxt" />
      <img class="m-auto" src="~/assets/vuetify.svg" alt="vuetify" />
      <img class="m-auto" src="~/assets/javascript.svg" alt="JS" />
      <img class="m-auto" src="~/assets/laravel.svg" alt="laravel" />
      <img class="m-auto" src="~/assets/flutter.svg" alt="flutter" />
      <img class="m-auto" src="~/assets/swift.svg" alt="swift" />
      <img class="m-auto" src="~/assets/sass.svg" alt="sass" />
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
