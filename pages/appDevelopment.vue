<template>
  <div class="container">
    <h1>App development</h1>
    <div class="columns">
      <div class="column">
        <!-- <img src="~/assets/app-development.svg" alt="" /> -->
        <AppDevelopmentImage />
      </div>
      <div class="column intro">
        <p>
          App developmentu sa venujem ako svojmu koníčku popri tvorbe webov.
          Aplikácie tvorím hlavne v technológií Flutter. Flutter som si vybral
          kvôli jeho flexibilite. Vo Flutteri totiž môžem tvoriť ako aplikácie
          pre IOS tak aj pre Android. Taktiež som vytvoril aj niekoľko aplikácií
          a jednu som aj zverejnil na Google play a App Store. V poslednom čase
          som sa začal venovať aj tvorbe aplikácií vo SwiftUI.
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <CardComponent title="SwiftUI">
          <SwiftUILogo slot="image" width="70px" delay="1" />
          <p slot="text">
            Technológií SwiftUI som sa začal venovať iba nedávno. Spravil som si
            v nej zopár aplikácií no zatiaľ ešte nie som expert v danom odvetví.
            Samozrejme mám záujem sa v tejto technológií naďalej zlepšovať a
            vytvoriť v nej aj zopár aplikácií, ktoré by boli vhodné na
            publikáciu.
          </p>
        </CardComponent>
      </div>
      <div class="column">
        <CardComponent title="Flutter">
          <FlutterLogo slot="image" width="70px" delay="1" />
          <p slot="text">
            Technológií Flutter sa venujem už asi rok. Vo Flutteri som spravil
            niekoľko aplikácií a jednu som aj vydal. Flutter je UI toolkit od
            spoločnosti Google vyvinutý na tvorbu aplikácií pre IOS, Android no
            aj pre web a klasické desktopy. Vo Flutteri som si zatiaľ vyskúšal
            len tvorbu mobilných aplikácií.
          </p>
        </CardComponent>
      </div>
    </div>
    <h1>Moje aplikácie</h1>
    <MyAppComponent />
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import MyAppComponent from '../components/MyAppComponent.vue'
import FlutterLogo from '../components/animations/FlutterLogo.vue'
import SwiftUILogo from '../components/animations/SwiftUILogo.vue'
import AppDevelopmentImage from '../components/animations/AppDevelopmentImage.vue'
export default {
  components: {
    CardComponent,
    MyAppComponent,
    FlutterLogo,
    SwiftUILogo,
    AppDevelopmentImage,
  },
  // transition: {
  //   enterActiveClass: 'animate__animated animate__slideInLeft',
  //   leaveActiveClass: 'animate__animated animate__slideInRight',
  // },
  transition(to, from) {
    // Entering
    if (!from) {
      return { enterActiveClass: 'animate__animated animate__fadeIn' }
    }
    if (from.path === '/webDevelopment' || from.path === '/cv') {
      return { enterActiveClass: 'animate__animated animate__fadeInLeft' }
    }
    if (from.path === '/') {
      return { enterActiveClass: 'animate__animated animate__fadeInRight' }
    }
    // Leaving
    if (to.path === '/webDevelopment' || to.path === '/cv') {
      return { leaveActiveClass: 'animate__animated animate__fadeOutLeft' }
    } else if (to.path === '/') {
      return { leaveActiveClass: 'animate__animated animate__fadeOutRight' }
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media (max-width: 768px) {
  .container {
    margin: 0 10px;
  }
}
</style>
