<template>
  <div class="container">
    <h1 class="heading text-center my-8">Web development</h1>
    <section class="sm:grid grid-cols-2 gap-10">
      <div class="hidden sm:flex justify-center">
        <WebDevelopmentImage class="block" />
      </div>
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
    </section>
    <section class="lg:grid grid-cols-2 gap-10 mt-16">
      <div>
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
      <div class="hidden lg:flex flex-col justify-evenly">
        <RocketImage class="m-auto block flex-auto" />
        <TownImage class="mx-auto block flex-auto" />
        <LaravelAndVueImage class="mx-auto block flex-auto" />
      </div>
    </section>
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
import LaravelAndVueImage from '../components/animations/LaravelAndVueImage'
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
    LaravelAndVueImage,
  },
  head() {
    return {
      title: '- Web Development',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' Web developmentu sa venujem už dlhšiu dobu (venujem sa hlavne front-endu). Venujem sa hlavne práci v reaktívnom frameworku Vue. Taktiež viem pracovať s jeho hlavnými knižniciami ako VueX, Vue Router, Nuxt a Vuetify. Samozrejmosťou je aj tvorba SPA aplikácií.',
        },
      ],
    }
  },
  transition(to, from) {
    // Entering
    if (!from) {
      return { enterActiveClass: 'animate__animated animate__fadeIn' }
    }
    if (from.path === '/cv') {
      return { enterActiveClass: 'animate__animated animate__slideInLeft' }
    }
    if (from.path === '/' || from.path === '/appDevelopment') {
      return { enterActiveClass: 'animate__animated animate__slideInRight' }
    }
    // Leaving
    if (to.path === '/appDevelopment' || to.path === '/') {
      return { leaveActiveClass: 'animate__animated animate__slideOutRight' }
    } else if (to.path === '/cv') {
      return { leaveActiveClass: 'animate__animated animate__slideOutLeft' }
    }
  },
}
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
