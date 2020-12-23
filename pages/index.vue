<template>
  <div>
    <img id="main-image" src="~/assets/main-image.svg" alt="" />
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
            Venujem sa hlavne tvorbe webov a webových aplikácií. Občas nakódim
            aj nejakú tú mobilnú apku ❤️.
          </p>
          <div class="buttons-conatiner">
            <a
              v-scroll-to="{
                el: '#products',
                duration: 300,
                easing: 'ease',
              }"
              class="my-button primary"
            >
              Zisti viac
            </a>

            <nuxt-link class="my-button secondary" to="cv">Životopis</nuxt-link>
          </div>
        </div>
        <div class="hero"></div>
      </section>
      <section class="my-interests">
        <h1>Zaujímam sa o</h1>
        <div class="container">
          <div class="ilustration">
            <img src="~/assets/web-dev-main.svg" alt="" />
          </div>
          <div class="description">
            <h2>Web development</h2>
            <p>
              Tvorba webov je mojou vášňou, ktorej sa venujem už vyše roka.
              Venujem sa hlavne front-end stránke webov. Pojmy ako HTML, CSS,
              Sass, JavaScript, Vue a programovanie cez komponenty dobre poznám
              a rád ti ich predstavím. Kebyže potrebuješ ďábla, ktorý ti spraví
              aj back-end napíš viem nejakého odporučiť.
            </p>
            <nuxt-link class="my-button primary" to="webDevelopment"
              >ZISTI VIAC</nuxt-link
            >
          </div>
        </div>
        <div class="container">
          <div class="description">
            <h2>App Development</h2>
            <p>
              App developmentu sa venujem ako svojmu koníčku popri tvorbe webov.
              Aplikácie tvorím hlavne v technológií Flutter. Flutter som si
              vybral kvôli jeho flexibilite. Vo Flutteri totiž môžem tvoriť ako
              aplikácie pre IOS tak aj pre Android. Taktiež som vytvoril aj
              niekoľko aplikácií a jednu som aj zverejnil na Google play a App
              Store. V poslednom čase som sa začal venovať aj tvorbe aplikácií
              vo SwiftUI.
            </p>
            <nuxt-link class="my-button primary" to="appDevelopment"
              >ZISTI VIAC</nuxt-link
            >
          </div>
          <div class="ilustration">
            <img src="~/assets/app-dev-main.svg" alt="" />
          </div>
        </div>
      </section>

      <OtherTechnologies />
    </div>
  </div>
</template>

<script>
import OtherTechnologies from '../components/OtherTechnologies.vue'

export default {
  components: {
    OtherTechnologies,
  },
  head() {
    return {
      title: '',
    }
  },
  data() {
    return {
      titleTexts: [
        'Volám sa Matúš a som <br/> programátor 💻',
        'Volám sa Matúš a som <br/> front-end developer ☕️',
        'Volám sa Matúš a som <br/> web developer? 😂',
        'Volám sa Matúš a som <br/> formulový nadšenec 🏎!',
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
  max-width: 890px;
  position: absolute;
  right: -25px;
  max-height: 1000px;
}
.main {
  height: 95vh;
  display: flex;
  align-items: center;
  .title {
    width: 50%;
    h1 {
      text-align: start;
      height: 112px;
      margin: 0;
    }
    p {
      margin: 25px 0;
    }
  }
  .buttons-conatiner {
    display: flex;
    a {
      &:first-child {
        margin-right: 16px;
        box-shadow: 0 4px 25px rgba($color: $primary-color, $alpha: 0.45);
      }
      &:last-child {
        box-shadow: 0 4px 25px rgba($color: $secondary-color, $alpha: 0.45);
      }
    }
  }
}
.my-interests {
  h1 {
    text-align: center;
  }
  .container {
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: space-between;
    .ilustration {
      width: 50%;
    }
    .description {
      h2 {
        text-align: start;
      }
      p {
        margin: 40px 0;
      }
      width: 50%;
    }
  }
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
