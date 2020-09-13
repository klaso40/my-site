<template>
  <div>
    <NavBar />
    <nuxt />
    <MyFooter />
  </div>
</template>

<style lang="scss">
$background-color: #0a1b37;
html {
  font-family: 'Lucida Grande', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: $background-color;
}
h1 {
  font-family: Montserrat;
  font-weight: bold;
  color: white;
  font-size: 52px;
  margin: 30px 0;
  text-align: center;
}
h2 {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin: 0 auto;
  //align-self: center;
}
h3 {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: bold;
  color: white;
}
h4 {
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  color: white;
}
p {
  font-family: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #e6e6e6;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
