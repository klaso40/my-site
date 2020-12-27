<template>
  <div class="container">
    <h1 class="heading my-8 text-center">Životopis</h1>
    <section class="lg:grid gap-6 grid-cols-2">
      <div class="hidden lg:flex justify-center">
        <TeachingImage class="h-full" />
      </div>

      <TimeLine year="2016" school="SOŠ Stará Turá">
        <p slot="first">
          Od roku 2016 som študoval v SOŠ Stará Turá odbor informačné a sieťové
          technológie. V škole som sa naučil základy fungovania sietí,
          programovanie v jazyku Java a C++ a niekoľko ďalších zručností. Školu
          som ukončil v roku 2020 s maturitným vysvedčením. Taktiež sa mi
          podarilo získať prvé miesto v celoštátnom kole Stredoškolskej odbornej
          činnosti v kategórií informatika.
        </p>
        <p slot="second">
          Popri mojom štúdiu som sa ako samouk aktívne venoval tvorbe mobilných
          aplikácií a webov. Absolvoval som niekoľko online kurzov a taktiež som
          si moje vedomosti vyskúšal aj na reálnych hlavne osobných projektoch.
        </p>
      </TimeLine>
    </section>
    <h2 class="sub-heading text-center my-8">Zručnosti</h2>
    <section class="grid gap-6 md:grid-cols-2">
      <CardComponent title="Vue.js" :img-path="require('~/assets/vue.svg')">
        <VueLogo slot="image" width="70px" />
        <p slot="text">
          Vue je takzvaný reaktívny framework. Na weboch nám pomáha s tvorbou
          UI. Taktiež nám umožňuje tvorbu takzvaných Single Page Applications. S
          Vue pracujem už dlhšiu dobu a taktiež som sa zoznámil aj s jeho
          hlavnými knižnicami ako Vue Router a VueX. Vue Router využívame hlavne
          pri tvorbe SPA. Umožňuje nám konfigurovať cesty k jednotlivým
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
          tejto stránky. Nuxt napríklad rozširuje klasickú priečinkovú štruktúru
          Vue, ktorá sa skladá len z priečinkov assets a components o priečinky
          pages, layouts, store, middleware, static a plugin. To umožňuje lepšie
          rozdelenie kódu a prechod medzi Nuxt aplikáciami je pre developerov
          jednoduchší. Na základe priečinka pages Nuxt automaticky vygeneruje
          konfiguráciu Vue Routera. Taktiež zlepšuje SEO Vue aplikácií a vďaka
          rozdeleniu kódu do viacerých menších súborov a smart-prefetchingu
          zlepšuje aj rýchlosť načítavania aplikácie.
        </p>
      </CardComponent>
      <CardComponent title="Vuetify">
        <VuetifyLogo slot="image" width="70px" />
        <p slot="text">
          Vuetify je intuitívna Vue UI knižnica postavená na material designe.
          Je pravidelne aktualizovaná, má aktívnu komunitu a funguje vo všetkých
          webových prehliadačoch. Podobne ako každá Vue aplikácia je rozdelená
          do jednotlivých komponentov, to umožňuje developerom vytvárať
          aplikácie s nádherným UI za pomerne krátky čas. Vuetify používam
          hlavne pri tvorbe aplikácií, ktoré slúžia na správu (napríklad rôzne
          admin panely alebo užívateľská sekcia na stránke).
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
    </section>
    <OtherTechnologies />
  </div>
</template>

<script>
import TimeLine from '../components/TimeLine'
import CardComponent from '../components/CardComponent'
import OtherTechnologies from '../components/OtherTechnologies'
import VueLogo from '../components/animations/VueLogo.vue'
import NuxtLogo from '../components/animations/NuxtLogo.vue'
import VuetifyLogo from '../components/animations/VuetifyLogo.vue'
import LaravelLogo from '../components/animations/LaravelLogo.vue'
// import FlutterLogo from '../components/animations/FlutterLogo.vue'
// import SwiftUILogo from '../components/animations/SwiftUILogo.vue'
// import AstronautSpaceImage from '../components/animations/AstronautSpaceImage.vue'
import TeachingImage from '../components/animations/TeachingImage.vue'
export default {
  components: {
    TimeLine,
    CardComponent,
    OtherTechnologies,
    VueLogo,
    NuxtLogo,
    VuetifyLogo,
    LaravelLogo,
    // FlutterLogo,
    // SwiftUILogo,
    // AstronautSpaceImage,
    TeachingImage,
  },
  transition(to, from) {
    // Entering
    if (!from) {
      return {}
    }
    if (from) {
      return {
        enterActiveClass: 'animate__animated animate__slideInRight',
        leaveActiveClass: 'animate__animated animate__slideOutRight',
      }
    }
  },
  head() {
    return {
      title: '- Životopis',
    }
  },
}
</script>
