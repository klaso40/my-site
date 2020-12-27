<template>
  <div class="container">
    <section class="h-screen flex flex-row items-center">
      <div class="w-full lg:w-1/2">
        <vue-typed-js
          :show-cursor="false"
          :strings="titleTexts"
          :content-type="'html'"
        >
          <h1 class="typing text-center heading h-32 lg:text-left"></h1>
        </vue-typed-js>
        <div class="flex justify-evenly lg:justify-start">
          <a
            v-scroll-to="{
              el: '#interests',
              duration: 300,
              easing: 'ease',
            }"
            class="bg-primary button mr-2"
            >Zisti viac</a
          >
          <nuxt-link to="cv" class="bg-secondary button">Životopis</nuxt-link>
        </div>
      </div>
      <img
        class="hidden lg:block w-1/2 absolute right-0"
        src="~/assets/main-image.svg"
        alt=""
      />
    </section>
    <h1 id="interests" class="heading text-center">Venujem sa</h1>
    <section class="h-max my-8 sm:flex flex-row items-center justify-between">
      <WebDevMainImage class="hidden sm:block w-1/2 mr-8" />
      <div class="sm:w-1/2">
        <h2 class="sub-heading">Web development</h2>
        <p>
          Vývoj frontendu tvorí primárnu časť mojej práce. Hlavne sa venujem
          vývoju v reaktívnom frameworku Vue. Na štýlovanie používam SASS alebo
          Tailwind. Tiež práca s animáciami a tvorba mind-blow efektov je u mňa
          samozrejmosťou. Baví ma robiť perfektný design a prinášať na internet
          krásu. Rozumiem tomu, že postupy tvorby webov a webových aplikácií sa
          neustále menia a preto sa stále rád učím nové veci a mám neustálu
          snahu zdokonaľovať sa.
        </p>
        <div class="my-8 grid grid-cols-4 gap-10 sm:hidden">
          <ImageCard class="flex flex-col items-center">
            <VueLogo />
          </ImageCard>
          <ImageCard class="flex flex-col items-center">
            <LaravelLogo />
          </ImageCard>
          <ImageCard class="flex flex-col items-center">
            <VuetifyLogo />
          </ImageCard>
          <ImageCard class="flex flex-col items-center">
            <NuxtLogo />
          </ImageCard>
        </div>
        <nuxt-link class="button bg-primary" to="webDevelopment"
          >ZISTI VIAC</nuxt-link
        >
      </div>
    </section>
    <section class="h-max my-8 sm:flex flex-row items-center justify-between">
      <div class="sm:w-1/2">
        <h2 class="sub-heading">UI/UX</h2>
        <p>
          Popri programovaní sa tiež venujem aj dizajnu. Dokážem nadizajnovať
          modernú web stránku, ktorá nielen dobre vyzerá, ale aj sa dobre
          používa. Dizajnujem pomocou moderných softvérov a výsledkom býva
          interaktívny prototyp, ktorý priamo odráža to, ako bude už reálny web
          vyzerať.
        </p>
        <div class="my-8 grid grid-cols-2 gap-10 w-1/2 sm:hidden">
          <ImageCard class="flex flex-col items-center">
            <img src="~/assets/affinity-design.svg" alt="" />
          </ImageCard>
          <ImageCard class="flex flex-col items-center">
            <img src="~/assets/figma.svg" alt="" />
          </ImageCard>
        </div>
      </div>

      <UIMainImage class="hidden sm:block w-1/2 ml-8" />
    </section>
    <OtherTechnologies />
  </div>
</template>

<script>
import OtherTechnologies from '../components/OtherTechnologies.vue'
import VueLogo from '../components/animations/VueLogo.vue'
import LaravelLogo from '../components/animations/LaravelLogo.vue'
import VuetifyLogo from '../components/animations/VuetifyLogo.vue'
import NuxtLogo from '../components/animations/NuxtLogo.vue'
import ImageCard from '../components/ImageCard.vue'
import WebDevMainImage from '../components/animations/WebDevMainImage.vue'
import UIMainImage from '../components/animations/UIMainImage.vue'

export default {
  components: {
    OtherTechnologies,
    VueLogo,
    LaravelLogo,
    VuetifyLogo,
    NuxtLogo,
    ImageCard,
    WebDevMainImage,
    UIMainImage,
  },
  data() {
    return {
      titleTexts: [
        'Volám sa Matúš a som front-end developer☕️',
        'Volám sa Matúš a som Vue developer💚',
      ],
    }
  },
  head() {
    return {
      title: '',
    }
  },
  transition(to, from) {
    // Entering
    if (!from) {
      return { enterActiveClass: 'animate__animated animate__fadeIn' }
    }
    if (from) {
      return {
        enterActiveClass: 'animate__animated animate__slideInLeft',
        leaveActiveClass: 'animate__animated animate__slideOutLeft',
      }
    }

    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
}
</script>
