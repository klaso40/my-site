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
