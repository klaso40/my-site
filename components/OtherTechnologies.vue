<template>
  <div>
    <h1>Ďalšie technológie, s ktorými sa kamarátim</h1>
    <div class="columns">
      <div class="column"><img src="~/assets/html-5.svg" alt="html" /></div>
      <div class="column"><img src="~/assets/css.svg" alt="css" /></div>
      <div class="column"><img src="~/assets/sass.svg" alt="sass" /></div>
      <div class="column">
        <img src="~/assets/javascript.svg" alt="javascript" />
      </div>
      <div class="column"><img src="~/assets/babel.svg" alt="babel" /></div>
    </div>
    <div class="columns">
      <div class="column">
        <img src="~/assets/bootstrap.svg" alt="bootstrap" />
      </div>
      <div class="column"><img src="~/assets/bulma.svg" alt="bulma" /></div>
      <div class="column"><img src="~/assets/php.svg" alt="php" /></div>
      <div class="column"><img src="~/assets/npm.svg" alt="npm" /></div>
      <div class="column"><img src="~/assets/github.svg" alt="github" /></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// .img-container {
//   display: flex;
//   flex-wrap: wrap;
// }
.columns {
  margin-top: 50px;
  .columns:first-child {
    margin-bottom: 30px;
  }
}
img {
  height: 150px;
}
</style>
