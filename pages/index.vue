<template>
  <div class="container px-10 m-auto">
    <section class="h-screen flex flex-row items-center">
      <div class="w-1/2">
        <vue-typed-js
          :showCursor="false"
          :strings="titleTexts"
          :contentType="'html'"
        >
          <h1 class="typing heading h-28"></h1>
        </vue-typed-js>
        <div class="flex">
          <a
            v-scroll-to="{
              el: '#products',
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
        class="w-1/2 absolute right-0 top-0"
        src="~/assets/main-image.svg"
        alt=""
      />
    </section>
    <h1 class="heading text-center">Zaujímam sa o</h1>
    <section class="h-max flex flex-row items-center justify-between">
      <img class="w-1/2 mr-8" src="~/assets/web-dev-main.svg" alt="" />
      <div class="w-1/2">
        <h2 class="sub-heading">Web development</h2>
        <p>
          Vývoj frontendu tvorí primárnu časť mojej práce. Hlavne sa venujem
          vývoju v reaktívnom frameworku Vue. Na štýlovanie používam SASS. Tiež
          práca s animáciami a tvorba mind-blow efektov je u mňa samozrejmosťou.
          Baví ma robiť perfektný design a prinášať na internet krásu.
        </p>
        <nuxt-link class="button bg-primary" to="webDevelopment"
          >ZISTI VIAC</nuxt-link
        >
      </div>
    </section>
    <section class="h-max flex flex-row items-center justify-between">
      <div class="w-1/2">
        <h2 class="sub-heading">App development</h2>
        <p>
          Vývoj frontendu tvorí primárnu časť mojej práce. Hlavne sa venujem
          vývoju v reaktívnom frameworku Vue. Na štýlovanie používam SASS. Tiež
          práca s animáciami a tvorba mind-blow efektov je u mňa samozrejmosťou.
          Baví ma robiť perfektný design a prinášať na internet krásu.
        </p>
        <nuxt-link class="button bg-primary" to="webDevelopment"
          >ZISTI VIAC</nuxt-link
        >
      </div>
      <img class="w-1/2 ml-8" src="~/assets/app-dev-main.svg" alt="" />
    </section>
    <OtherTechnologies />
  </div>
  <!-- </div> -->
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
// #main-image {
//   max-width: 890px;
//   position: absolute;
//   right: -25px;
//   max-height: 1000px;
// }
// .main {
//   height: 95vh;
//   display: flex;
//   align-items: center;
//   .title {
//     width: 50%;
//     h1 {
//       text-align: start;
//       height: 112px;
//       margin: 0;
//     }
//     p {
//       margin: 25px 0;
//     }
//   }
//   .buttons-conatiner {
//     display: flex;
//     a {
//       &:first-child {
//         margin-right: 16px;
//         box-shadow: 0 4px 25px rgba($color: $primary-color, $alpha: 0.45);
//       }
//       &:last-child {
//         box-shadow: 0 4px 25px rgba($color: $secondary-color, $alpha: 0.45);
//       }
//     }
//   }
// }
// .my-interests {
//   h1 {
//     text-align: center;
//   }
//   .container {
//     display: flex;
//     height: 80vh;
//     align-items: center;
//     justify-content: space-between;
//     .ilustration {
//       width: 50%;
//     }
//     .description {
//       h2 {
//         text-align: start;
//       }
//       p {
//         margin: 40px 0;
//       }
//       width: 50%;
//     }
//   }
// }

// .images-container {
//   img {
//     width: 150px;
//   }
// }

// .columns {
//   margin-top: 50px;
// }
// @media (max-width: 768px) {
//   #main-image {
//     display: none;
//   }
//   .container {
//     margin: 0 10px;
//     .main {
//       text-align: center;
//       h1 {
//         text-align: center;
//         margin: 0 auto;
//       }
//       .title {
//         width: 100%;
//       }
//     }
//     .button {
//       margin: 10px auto;
//     }

//     h2 {
//       margin: 15px 0;
//     }
//     .columns {
//       text-align: center;
//       margin-top: 0px;
//     }
//   }
// }
// @media (min-width: 769px) and (max-width: 1024px) {
//   #main-image {
//     display: none;
//   }
//   .container {
//     .main {
//       text-align: center;
//       h1 {
//         text-align: center;
//         margin: 0 auto;
//       }
//       .title {
//         width: 100%;
//       }
//     }
//   }
// }

// @media (min-width: 1025px) and (max-width: 1408px) {
//   .container {
//     .center {
//       .photo {
//         width: 278px;
//         height: 275px;
//       }
//       #my-title {
//         font-size: 26px;
//       }
//       .astronaut-container {
//         width: 250px;
//         height: 250px;
//       }
//     }
//   }
// }
</style>
