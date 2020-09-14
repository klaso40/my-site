<template>
  <div class="container">
    <h1>Životopis</h1>
    <div class="columns">
      <div class="column">
        <h2>Vzdelanie</h2>
        <TimeLine year="2016" school="SOŠ Stará Turá">
          <p slot="first">
            Od roku 2016 som študoval v SOŠ Stará Turá odbor informačné a
            sieťové technológie. V škole som sa naučil základy fungovania sietí,
            programovanie v jazyku Java a C++ a niekoľko ďalších zručností.
            Školu som ukončil v roku 2020 s maturitným vysvedčením. Taktiež sa
            mi podarilo získať prvé miesto v celoštátnom kole Stredoškolskej
            odbornej činnosti v kategórií informatika.
          </p>
          <p slot="second">
            Popri mojom štúdiu som sa ako samouk aktívne venoval tvorbe
            mobilných aplikácií a webov. Absolvoval som niekoľko online kurzov a
            taktiež som si moje vedomosti vyskúšal aj na reálnych hlavne
            osobných projektoch.
          </p>
        </TimeLine>
        <TimeLine year="2020" school="Masarykova univerzita">
          <p slot="first">
            Tento rok nastupujem na Masarykovu univerzitu v Brne. Budem študovať
            odbor programovanie a vývoj aplikácií. Tento odbor som si vybral
            hlavne kvôli mojej záľube k tvorbe webov a aplikácií. Mojím cieľom
            je predovšetkým rozšírenie si vedomostí v oblasti programovania,
            tvorby aplikácií a tvorby webov.
          </p>
          <p slot="second">
            Samozrejme popri štúdiu sa chcem ďalej zdokonaľovať v technológiách,
            ktoré už poznám, ale taktiež chcem spoznať nové technológie a
            napredovať v nich. Ďalším krokom je získanie vedomostí a zručností v
            tvorbe mobilných aplikácií vo SwiftUI a tiež postup z Vue2 na Vue3.
          </p>
        </TimeLine>
        <div class="img-container">
          <img src="~/assets/astronaut-space.svg" alt="" class="astronaut" />
          <img src="~/assets/teaching.svg" alt="" class="teaching" />
        </div>
      </div>
      <div class="column">
        <h2>Zručnosti</h2>
        <CardComponent title="Vue.js" :img-path="require('~/assets/vue.svg')">
          <p>
            Vue je takzvaný reaktívny framework. Na weboch nám pomáha s tvorbou
            UI. Taktiež nám umožňuje tvorbu takzvaných Single Page Applications.
            S Vue pracujem už dlhšiu dobu a taktiež som sa zoznámil aj s jeho
            hlavnými knižnicami ako Vue Router a VueX. Vue Router využívame
            hlavne pri tvorbe SPA. Umožňuje nám konfigurovať cesty k jednotlivým
            podstránkam. VueX je vlastne globálny úložný priestor pre Vue
            aplikácie. VueX vieme najviac oceniť keď určité dáta potrebujeme vo
            viacerých Vue komponentoch.
          </p>
        </CardComponent>
        <CardComponent title="Nuxt.js" :img-path="require('~/assets/nuxt.svg')">
          <p>
            Nuxt je Vue framework, ktorý sa využíva hlavne pri tvorbe hlavne
            väčších projektov, ale pre prezentáciu som ho použil aj pri tvorbe
            tejto stránky. Nuxt napríklad rozširuje klasickú priečinkovú
            štruktúru Vue, ktorá sa skladá len z priečinkov assets a components
            o priečinky pages, layouts, store, middleware, static a plugin. To
            umožňuje lepšie rozdelenie kódu a prechod medzi Nuxt aplikáciami je
            pre developerov jednoduchší. Na základe priečinka pages Nuxt
            automaticky vygeneruje konfiguráciu Vue Routera. Taktiež zlepšuje
            SEO Vue aplikácií a vďaka rozdeleniu kódu do viacerých menších
            súborov a smart-prefetchingu zlepšuje aj rýchlosť načítavania
            aplikácie.
          </p>
        </CardComponent>
        <CardComponent
          title="Vuetify"
          :img-path="require('~/assets/vuetify.svg')"
        >
          <p>
            Vuetify je intuitívna Vue UI knižnica postavená na material designe.
            Je pravidelne aktualizovaná, má aktívnu komunitu a funguje vo
            všetkých webových prehliadačoch. Podobne ako každá Vue aplikácia je
            rozdelená do jednotlivých komponentov, to umožňuje developerom
            vytvárať aplikácie s nádherným UI za pomerne krátky čas. Vuetify
            používam hlavne pri tvorbe aplikácií, ktoré slúžia na správu
            (napríklad rôzne admin panely alebo užívateľská sekcia na stránke).
          </p>
        </CardComponent>
        <CardComponent
          title="Laravel"
          :img-path="require('~/assets/laravel.svg')"
        >
          <p>
            Laravel ja PHP framework, ktorý sa využíva ako pri tvorbe front-endu
            tak aj pri tvorbe back-endu. Ja sa venujem hlavne front-end stránke
            Laravelu. Mám skúsenosti s implementáciou Vue do Laravelu, či už ako
            samostatných komponentov do Laravel bladov alebo tvorby SPA vo Vue a
            následným prepojením na Laravel cez RESTful API. Back-end stránke
            Laravelu sa nevenujem.
          </p>
        </CardComponent>
        <CardComponent
          title="SwiftUI"
          :img-path="require('~/assets/swift.svg')"
        >
          <p>
            Technológií SwiftUI som sa začal venovať iba nedávno. Spravil som si
            v nej zopár aplikácií no zatiaľ ešte nie som expert v danom odvetví.
            Samozrejme mám záujem sa v tejto technológií naďalej zlepšovať a
            vytvoriť v nej aj zopár aplikácií, ktoré by boli vhodné na
            publikáciu.
          </p>
        </CardComponent>
        <CardComponent
          title="Flutter"
          :img-path="require('~/assets/flutter.svg')"
        >
          <p>
            Technológií Flutter sa venujem už asi rok. Vo Flutteri som spravil
            niekoľko aplikácií a jednu som aj vydal. Flutter je UI toolkit od
            spoločnosti Google vyvinutý na tvorbu aplikácií pre IOS, Android no
            aj pre web a klasické desktopy. Vo Flutteri som si zatiaľ vyskúšal
            len tvorbu mobilných aplikácií.
          </p>
        </CardComponent>
      </div>
    </div>
    <OtherTechnologies />
  </div>
</template>

<script>
import TimeLine from '../components/TimeLine'
import CardComponent from '../components/CardComponent'
import OtherTechnologies from '../components/OtherTechnologies'
export default {
  components: {
    TimeLine,
    CardComponent,
    OtherTechnologies,
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;

  .astronaut {
    height: 400px;
    margin: 50px 0;
  }
  .teaching {
    height: 400px;
    margin: 50px 0;
  }
}
.columns {
  h2 {
    text-align: center;
  }
}
@media (max-width: 768px) {
  .container {
    margin: 0 10px;
  }
  .astronaut {
    height: 200px !important;
    margin: 20px 0 !important;
  }
  .teaching {
    height: 200px !important;
    margin: 20px 0 !important;
  }
}
</style>
