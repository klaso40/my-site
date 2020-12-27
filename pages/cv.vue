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
      <CardComponent title="Vue" :img-path="require('~/assets/vue.svg')">
        <VueLogo slot="image" width="70px" />
        <p slot="text">
          Vue je môj najobľúbenejší JS framework. Poznám a viem pracovať s jeho
          najznámejšími knižnicami - VueX, Vue Routter. Cez Vue dokážem spraviť
          webové aplikácie rýchlo a efektívne a vďaka roztriedeniu kódu do
          komponentov je môj kód vždy čistý a usporiadaný.
        </p>
      </CardComponent>
      <CardComponent title="Nuxt" :img-path="require('~/assets/nuxt.svg')">
        <NuxtLogo slot="image" width="70px" />
        <p slot="text">
          Taktiež som si už vyskúšal tvorbu webových aplikácií cez Nuxt. Poznám
          všetky jeho najznámejšie ,,fičúry" ako napríklad smart-prefetching,
          automatická konfigurácia Vue Routtera, či zlepšené SEO oproti
          klasickým Vue aplikáciam.
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
          komponenty. Taktiež som robil na SPA Vue aplikáciach, kde ako back-end
          sa používal práve Laravel.
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
