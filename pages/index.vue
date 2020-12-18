<template>
  <div>
    <img id="main-image" src="~/assets/main-image.png" alt="" />
    <div class="container">
      <section class="main">
        <div class="title">
          <vue-typed-js
            :showCursor="false"
            :strings="titleTexts"
            :contentType="'html'"
          >
            <h1 class="typing"></h1>
          </vue-typed-js>
          <p>
            Venujem sa hlavne tvorbe webov a webových aplikácií v reaktívnom
            frameworku Vue.js. Občas nakódim aj nejakú tú mobilnú apku.
          </p>

          <a
            v-scroll-to="{
              el: '#products',
              duration: 300,
              easing: 'ease',
            }"
            class="button"
            >Zisti viac</a
          >
          <nuxt-link class="button" to="cv">Zivotopis</nuxt-link>
        </div>
        <div class="hero"></div>
      </section>

      <h2 id="products">Zaujímam sa o</h2>
      <div class="columns">
        <div class="column">
          <InterestCard
            title="App development"
            :nuxt-link="{ name: 'appDevelopment' }"
            :image-path="require('~/assets/app-development.svg')"
          >
            <p>
              Tvorbe mobilných aplikácií sa venujem ako svojmu koníčku popri
              tvorbe webov. Aplikácie vyvíjam hlavne v technológií Flutter. V
              poslednom čase som sa začal taktiež učiť aj tvorbu mobilných
              aplikácií vo SwiftUI.
            </p>
          </InterestCard>
        </div>
        <div class="column">
          <InterestCard
            title="Web development"
            :nuxt-link="{ name: 'webDevelopment' }"
            :image-path="require('~/assets/web-development.svg')"
          >
            <p>
              Web developmentu sa venujem už dlhšiu dobu (venujem sa hlavne
              front-endu). Viem pracovať s reaktívnym frameworkom Vue a jeho
              hlavnými knižnicami Vue Router, VueX, Vuetify a nerobí mi problém
              ani práca s Nuxt.js.
            </p>
          </InterestCard>
        </div>
        <div class="column">
          <InterestCard
            title="Dizajn"
            :image-path="require('~/assets/design.svg')"
            ><p>
              Vo svojom voľnom čase sa venujem hlavne dizajnu mobilných
              aplikácií a webov. Dizajnér nie som no všetky moje aplikácie a
              weby, ktoré som vytvoril som si nadizajnoval sám a chcem sa v
              danom odvetví naďalej zdokonaľovať.
            </p>
          </InterestCard>
        </div>
      </div>
      <h1>Pracujem hlavne s</h1>
      <div class="columns images-container">
        <div class="column">
          <!-- <img src="~/assets/vue.svg" alt="" /> -->
          <VueLogo width="100px" />
        </div>
        <div class="column">
          <VuetifyLogo width="100px" />
          <!-- <img src="~/assets/vuetify.svg" alt="" /> -->
        </div>
        <div class="column">
          <!-- <img src="~/assets/nuxt.svg" alt="" /> -->
          <NuxtLogo width="100px" />
        </div>
        <div class="column">
          <!-- <img src="~/assets/laravel.svg" alt="" /> -->
          <LaravelLogo width="100px" />
        </div>
        <div class="column">
          <!-- <img src="~/assets/flutter.svg" alt="" /> -->
          <FlutterLogo width="100px" />
        </div>
        <div class="column">
          <!-- <img src="~/assets/swift.svg" alt="" /> -->
          <SwiftUILogo width="100px" />
        </div>
      </div>
      <OtherTechnologies />
    </div>
  </div>
</template>

<script>
import InterestCard from '../components/InterestCard.vue'
import OtherTechnologies from '../components/OtherTechnologies.vue'
import VueLogo from '../components/animations/VueLogo.vue'
import NuxtLogo from '../components/animations/NuxtLogo.vue'
import VuetifyLogo from '../components/animations/VuetifyLogo.vue'
import LaravelLogo from '../components/animations/LaravelLogo.vue'
import FlutterLogo from '../components/animations/FlutterLogo.vue'
import SwiftUILogo from '../components/animations/SwiftUILogo.vue'
export default {
  components: {
    InterestCard,
    OtherTechnologies,
    VueLogo,
    NuxtLogo,
    VuetifyLogo,
    LaravelLogo,
    FlutterLogo,
    SwiftUILogo,
  },
  head() {
    return {
      title: '',
    }
  },
  data() {
    return {
      titleTexts: [
        'Ahoj, moje meno je Matúš <br /> a som programátor 💻',
        'Ahoj, moje meno je Matúš <br /> a som front-end developer ☕️',
        'Ahoj, moje meno je Matúš <br /> a som web developer? 😂',
        'Ahoj, moje meno je Matúš <br /> a som formulový nadšenec 🏎 !',
      ],
    }
  },
  transition(to, from) {
    // Entering
    if (!from) {
      return { enterActiveClass: 'animate__animated animate__fadeIn' }
    }
    if (from) {
      return {
        enterActiveClass: 'animate__animated animate__fadeInLeft',
        leaveActiveClass: 'animate__animated animate__fadeOutLeft',
      }
    }

    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
}
</script>

<style lang="scss" scoped>
#main-image {
  max-width: 50%;
  position: absolute;
  right: 0px;
  max-height: 90vh;
}
.main {
  height: 95vh;
  display: flex;
  align-items: center;
  .title {
    width: 50%;
    h1 {
      text-align: start;
      margin: 0;
    }
    p {
      margin: 25px 0;
    }
    .button {
      width: 150px;
      height: 40px;
      border-radius: 10px;
      background: #545f73;
      color: white;
      border: none;
    }
  }
}

h2 {
  text-align: center;
  margin-bottom: 50px;
}

.images-container {
  img {
    width: 150px;
  }
}

.columns {
  margin-top: 50px;
}
@media (max-width: 768px) {
  #main-image {
    display: none;
  }
  .container {
    margin: 0 10px;
    .main {
      text-align: center;
      h1 {
        text-align: center;
        margin: 0 auto;
      }
      .title {
        width: 100%;
      }
    }
    .button {
      margin: 10px auto;
    }

    h2 {
      margin: 15px 0;
    }
    .columns {
      text-align: center;
      margin-top: 0px;
    }
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  #main-image {
    display: none;
  }
  .container {
    .main {
      text-align: center;
      h1 {
        text-align: center;
        margin: 0 auto;
      }
      .title {
        width: 100%;
      }
    }
  }
}

@media (min-width: 1025px) and (max-width: 1408px) {
  .container {
    .center {
      .photo {
        width: 278px;
        height: 275px;
      }
      #my-title {
        font-size: 26px;
      }
      .astronaut-container {
        width: 250px;
        height: 250px;
      }
    }
  }
}
</style>
