<template>
  <div>
    <NavBar />
    <nuxt />
    <MyFooter />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
}
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
  font-family: 'Montserrat';
  font-weight: 700;
  color: white;
  font-size: 52px;
  margin: 30px 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 30px;
  }
}
h2 {
  font-family: 'Montserrat';
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin: 0 auto;
  //align-self: center;
  @media (max-width: 768px) {
    font-size: 24px;
  }
}
h3 {
  font-family: 'Montserrat';
  font-size: 22px;
  font-weight: 700;
  color: white;
  // @media (max-width: 768px) {
  //   font-size: 24px;
  // }
}
h4 {
  font-family: Montserrat;
  font-size: 22px;
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
