<template>
  <div class="container">
    <h1>Web development</h1>
    <div class="columns">
      <div class="column">
        <WebDevelopmentImage />
      </div>
      <div class="column intro">
        <p>
          Web developmentu sa venujem už dlhšiu dobu (venujem sa hlavne
          front-endu). Snáď ako každý som začínal s HTML, CSS a Javascriptom.
          Postupne som prešiel z CSS na SCSS a klasický Javascript som nahradil
          reaktívnym frameworkom Vue. Vue používam v niektorých prípadoch ako
          náhradu klasického JavaScriptu na weboch ale taktiež mi nerobí problém
          aj tvorba SPA (Single Page Applications). Vue mi pomáha pracovať
          efektívnejšie a vďaka triedeniu kódu do komponetov je môj kód
          prehľadnejší. Spolu s Vue som sa taktiež naučil pracovať s knižnicami
          Vue Router, VueX a Vuetify.
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <CardComponent title="Vue.js" :img-path="require('~/assets/vue.svg')">
          <VueLogo slot="image" width="70px" />
          <p slot="text">
            Vue je takzvaný reaktívny framework. Na weboch nám pomáha s tvorbou
            UI. Taktiež nám umožňuje tvorbu takzvaných Single Page Applications.
            S Vue pracujem už dlhšiu dobu a taktiež som sa zoznámil aj s jeho
            hlavnými knižnicami ako Vue Router a VueX. Vue Router využívame
            hlavne pri tvorbe SPA. Umožňuje nám konfigurovať cesty k jednotlivým
            podstránkam. VueX je vlastne globálny úložný priestor pre Vue
            aplikácie. VueX vieme najviac oceniť keď určité dáta potrebujeme vo
            viacerých Vue komponentoch.
          </p>
        </CardComponent>
        <CardComponent title="Nuxt.js" :img-path="require('~/assets/nuxt.svg')">
          <NuxtLogo slot="image" width="70px" />
          <p slot="text">
            Nuxt je Vue framework, ktorý sa využíva hlavne pri tvorbe hlavne
            väčších projektov, ale pre prezentáciu som ho použil aj pri tvorbe
            tejto stránky. Nuxt napríklad rozširuje klasickú priečinkovú
            štruktúru Vue, ktorá sa skladá len z priečinkov assets a components
            o priečinky pages, layouts, store, middleware, static a plugin. To
            umožňuje lepšie rozdelenie kódu a prechod medzi Nuxt aplikáciami je
            pre developerov jednoduchší. Na základe priečinka pages Nuxt
            automaticky vygeneruje konfiguráciu Vue Routera. Taktiež zlepšuje
            SEO Vue aplikácií a vďaka rozdeleniu kódu do viacerých menších
            súborov a smart-prefetchingu zlepšuje aj rýchlosť načítavania
            aplikácie.
          </p>
        </CardComponent>
        <CardComponent title="Vuetify">
          <VuetifyLogo slot="image" width="70px" />
          <p slot="text">
            Vuetify je intuitívna Vue UI knižnica postavená na material designe.
            Je pravidelne aktualizovaná, má aktívnu komunitu a funguje vo
            všetkých webových prehliadačoch. Podobne ako každá Vue aplikácia je
            rozdelená do jednotlivých komponentov, to umožňuje developerom
            vytvárať aplikácie s nádherným UI za pomerne krátky čas. Vuetify
            používam hlavne pri tvorbe aplikácií, ktoré slúžia na správu
            (napríklad rôzne admin panely alebo užívateľská sekcia na stránke).
          </p>
        </CardComponent>
        <CardComponent title="Laravel">
          <LaravelLogo slot="image" width="70px" />
          <p slot="text">
            Laravel ja PHP framework, ktorý sa využíva ako pri tvorbe front-endu
            tak aj pri tvorbe back-endu. Ja sa venujem hlavne front-end stránke
            Laravelu. Mám skúsenosti s implementáciou Vue do Laravelu, či už ako
            samostatných komponentov do Laravel bladov alebo tvorby SPA vo Vue a
            následným prepojením na Laravel cez RESTful API. Back-end stránke
            Laravelu sa nevenujem.
          </p>
        </CardComponent>
      </div>
      <div class="column img-column">
        <RocketImage class="rocket" />

        <!-- <img src="~/assets/town.svg" alt="" class="town" /> -->
        <TownImage class="town" />
        <img
          src="~/assets/laravel_and_vue.svg"
          alt=""
          class="laravel-and-vue"
        />
      </div>
    </div>
    <OtherTechnologies />
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import OtherTechnologies from '../components/OtherTechnologies.vue'
import VueLogo from '../components/animations/VueLogo.vue'
import NuxtLogo from '../components/animations/NuxtLogo.vue'
import VuetifyLogo from '../components/animations/VuetifyLogo.vue'
import LaravelLogo from '../components/animations/LaravelLogo.vue'
import WebDevelopmentImage from '../components/animations/WebDevelopmentImage.vue'
import RocketImage from '../components/animations/RocketImage.vue'
import TownImage from '../components/animations/TownImage.vue'
export default {
  components: {
    CardComponent,
    OtherTechnologies,
    VueLogo,
    NuxtLogo,
    VuetifyLogo,
    LaravelLogo,
    WebDevelopmentImage,
    RocketImage,
    TownImage,
  },
  transition(to, from) {
    // Entering
    if (!from) {
      return { enterActiveClass: 'animate__animated animate__fadeIn' }
    }
    if (from.path === '/cv') {
      return { enterActiveClass: 'animate__animated animate__fadeInLeft' }
    }
    if (from.path === '/' || from.path === '/appDevelopment') {
      return { enterActiveClass: 'animate__animated animate__fadeInRight' }
    }
    // Leaving
    if (to.path === '/appDevelopment' || to.path === '/') {
      return { leaveActiveClass: 'animate__animated animate__fadeOutRight' }
    } else if (to.path === '/cv') {
      return { leaveActiveClass: 'animate__animated animate__fadeOutLeft' }
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.img-column {
  display: flex;
  flex-direction: column;
  .rocket {
    height: 300px;
  }

  .town {
    height: fit-content;
    margin: 80px 0;
  }
  .laravel-and-vue {
    height: 350px;
  }
}
@media (max-width: 768px) {
  .container {
    margin: 0 10px;
  }
}
</style>
