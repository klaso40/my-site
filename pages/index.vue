<template>
  <div class="container">
    <section class="h-screen flex flex-row items-center">
      <div class="w-full lg:w-1/2">
        <vue-typed-js
          :show-cursor="false"
          :strings="titleTexts"
          :content-type="'html'"
        >
          <h1
            class="typing text-center heading h-24 lg:h-48 w-full lg:text-left"
          ></h1>
        </vue-typed-js>
        <div>
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
          <div
            class="flex flex-row justify-center lg:justify-start items-center lg:w-1/2 my-8"
          >
            <a
              href="https://github.com/klaso40"
              class="text-textColor hover:text-primary"
            >
              <svg
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                class="w-10 fill-current"
              >
                <path
                  d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
                  data-original="#212121"
                  class="active-path"
                  data-old_color="#212121"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mat%FA/?-martin-klasovit%FD-28b2b51a9"
              class="ml-4 text-textColor hover:text-primary"
            >
              <svg
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                class="w-10 fill-current"
              >
                <path
                  d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                />
                <path
                  d="m.396 7.977h4.976v16.023h-4.976z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                />
                <path
                  d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                />
              </svg>
            </a>
          </div>
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
        <div class="my-8 grid grid-cols-4 gap-4 sm:hidden">
          <ImageCard class="image-card-style">
            <VueLogo />
          </ImageCard>
          <ImageCard class="image-card-style">
            <LaravelLogo />
          </ImageCard>
          <ImageCard class="image-card-style">
            <VuetifyLogo />
          </ImageCard>
          <ImageCard class="image-card-style">
            <NuxtLogo />
          </ImageCard>
        </div>
        <nuxt-link class="button bg-primary" to="/web-development"
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
        <div class="my-8 grid grid-cols-2 gap-4 w-1/2 sm:hidden">
          <ImageCard class="image-card-style">
            <img src="~/assets/affinity-design.svg" alt="" />
          </ImageCard>
          <ImageCard class="image-card-style">
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
