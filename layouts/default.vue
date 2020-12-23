<template>
  <div>
    <NavBar />
    <nuxt />
    <MyFooter />
  </div>
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: 'Matúš Martin Klasovitý %s',
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
        },
      ],
      metaInfo: {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Ahoj moje meno je Matúš Klasovitý a som programátor. Venujem sa hlavne Web Developmentu a práci v reaktívnom frameworku Vue. Taktiež viem pracovať s jeho hlavnými knižniciami ako VueX, Vue Router, Nuxt a Vuetify. Taktiež sa venuje App Developmentu. Aplikácie tvorím hlavne vo frameworku Flutter.',
        },
      ],
    }
  },
}
</script>
>
<style lang="scss">
// @font-face {
//   font-family: 'Montserrat';
//   src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
// }
// $background-color: #e8e8e8;
// $headline-text-color: #433d3c;
// $button-text-color: #e8e8e8;
// $primary-color: #f05454;
// $secondary-color: #30475e;
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
  scroll-behavior: smooth;
  background: $background-color;
}
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  font-size: 50px;
  margin: 30px 0;
  color: $headline-text-color;
  // text-align: center;
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
}
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: $headline-text-color;
  //align-self: center;
  @media (max-width: 768px) {
    font-size: 24px;
  }
}
h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: white;
  // @media (max-width: 768px) {
  //   font-size: 24px;
  // }
}
h4 {
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: white;
}
p {
  font-family: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: normal;
  color: $text-color;
  line-height: 40px;
}

.my-button {
  width: 212px;
  height: 53px;
  line-height: 53px;
  display: block;
  border-radius: 10px;
  text-align: center;
  border: none;
  color: $button-text-color;
  font-family: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 20px;
}
.primary {
  background: $primary-color;
}
.secondary {
  background: $secondary-color;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
