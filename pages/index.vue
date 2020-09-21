<template>
  <div class="container">
    <div class="center">
      <div class="photo"></div>
      <div id="my-title">
        Ahoj, moje meno je Matúš <br />
        a som programátor
        <a
          v-scroll-to="{
            el: '#products',
            duration: 300,
            easing: 'ease',
          }"
          class="button"
          >Zisti viac</a
        >
      </div>
      <div class="astronaut-container">
        <FlyingAstronautAnimation />
      </div>
    </div>
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
            Vo svojom voľnom čase sa venujem hlavne dizajnu mobilných aplikácií
            a webov. Dizajnér nie som no všetky moje aplikácie a weby, ktoré som
            vytvoril som si nadizajnoval sám a chcem sa v danom odvetví naďalej
            zdokonaľovať.
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
import FlyingAstronautAnimation from '../components/animations/FlyingAstronaulAnimation.vue'
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
    FlyingAstronautAnimation,
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
.center {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //text-align: center;

  .photo {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background: url('~assets/klaso-bez-pozadia.png');
    background-size: 100%;
    background-repeat: no-repeat;
    border: 8px solid white;
  }

  #my-title {
    text-align: start !important;
    font-family: Montserrat;
    font-weight: bold;
    color: white;
    font-size: 40px;

    //margin: 30px 0;
    // text-align: center;
  }
  .astronaut-container {
    height: 300px;
    width: 300px;
    position: relative;
    //border-radius: 50%;
    // background: white;
    img {
      height: 150px;
    }
  }
  .button {
    border-radius: 10px;
    background: #22324b;
    border: none;
    color: #ffffff;
    width: 150px;
    margin-top: 20px;
    display: block;
    font-weight: normal;
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
  .container {
    margin: 0 10px;
    .center {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-evenly;
      #my-title {
        font-size: 24px;
      }
      .button {
        margin: 10px auto;
      }
    }
    .images-container {
      text-align: center;
    }
    h2 {
      margin: 15px 0;
    }
    .columns {
      margin-top: 0px;
    }
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    //margin: 0 10px;
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

@media (min-width: 1025px) and (max-width: 1408px) {
  .container {
    //margin: 0 10px;
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
/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
