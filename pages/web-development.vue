<template>
  <div class="container">
    <h1 class="heading text-center my-8">Web development</h1>
    <section class="sm:grid grid-cols-2 gap-10">
      <div class="hidden sm:flex justify-center">
        <WebDevelopmentImage class="block" />
      </div>
      <p>
        Vývoj frontendu tvorí primárnu časť mojej práce. Hlavne sa venujem
        vývoju v reaktívnom frameworku Vue. Na štýlovanie používam SASS alebo
        Tailwind. Tiež práca s animáciami a tvorba mind-blow efektov je u mňa
        samozrejmosťou. Baví ma robiť perfektný design a prinášať na internet
        krásu. Rozumiem tomu, že postupy tvorby webov a webových aplikácií sa
        neustále menia a preto sa stále rád učím nové veci a mám neustálu snahu
        zdokonaľovať sa.
      </p>
    </section>
    <section class="lg:grid grid-cols-2 gap-10 mt-16">
      <div>
        <CardComponent title="Vue" :img-path="require('~/assets/vue.svg')">
          <VueLogo slot="image" width="70px" />
          <p slot="text">
            Vue je môj najobľúbenejší JS framework. Poznám a viem pracovať s
            jeho najznámejšími knižnicami - VueX, Vue Routter. Cez Vue dokážem
            spraviť webové aplikácie rýchlo a efektívne a vďaka roztriedeniu
            kódu do komponentov je môj kód vždy čistý a usporiadaný.
          </p>
        </CardComponent>
        <CardComponent title="Nuxt" :img-path="require('~/assets/nuxt.svg')">
          <NuxtLogo slot="image" width="70px" />
          <p slot="text">
            Taktiež som si už vyskúšal tvorbu webových aplikácií cez Nuxt.
            Poznám všetky jeho najznámejšie ,,fičúry" ako napríklad
            smart-prefetching, automatická konfigurácia Vue Routtera, či
            zlepšené SEO oproti klasickým Vue aplikáciam.
          </p>
        </CardComponent>
        <CardComponent title="Vuetify">
          <VuetifyLogo slot="image" width="70px" />
          <p slot="text">
            Viem pracovať aj s najznámejšou UI knižnicou pre Vue - Vuetify.
            Vuetify som si vyskúšal hlavne pri tvorbe aplikácií, ktoré slúžia na
            správu (napríklad rôzne admin panely alebo užívateľská sekcia na
            stránke).
          </p>
        </CardComponent>
        <CardComponent title="Laravel">
          <LaravelLogo slot="image" width="70px" />
          <p slot="text">
            Laravel poznám len z front-end stránky. Niekoľko krát som v Laravel
            projektoch tvoril UI cez Laravel blade-y, či vkladal do blade-ov Vue
            komponenty. Taktiež som robil na SPA Vue aplikáciach, kde ako
            back-end sa používal práve Laravel.
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
