<template>
  <div class="lg:grid grid-cols-2 gap-8 my-14 p-8 shadow-md rounded-md">
    <div class="hidden lg:flex flex-col justify-center items-center">
      <img src="~/assets/WS-List.png" alt="" class="h-96" />
    </div>
    <div>
      <h2 class="sub-heading">WS List</h2>
      <p>
        WS List je krásny jednoduchý to-do list, pomocou ktorého sa stanú tvoje
        dni viac zorganizované a menej stresujúce.
      </p>
      <p>
        Vďaka aplikácií WS List môžeš ľahko a pohodlne usporadúvať svoje úlohy,
        či už sa jedná o školu, prácu alebo domácnosť. Prostredníctvom
        intuitívneho dizajnu aplikácie sa v nej rýchlo a ľahko zorientuješ.
      </p>

      <StoreButton
        :img-path="require('~/assets/google-play.svg')"
        title="GET IT ON"
        description="Google play"
        :link="googlePlay"
        class="my-4"
      />
      <StoreButton
        :img-path="require('~/assets/apple.svg')"
        title="Donwload on the"
        description="App Store"
        :link="appStore"
      />
    </div>
  </div>
</template>

<script>
import StoreButton from '../components/StoreButton.vue'
export default {
  components: {
    StoreButton,
  },
  props: {
    googlePlay: {
      type: String,
      default: '',
    },
    appStore: {
      type: String,
      default: '',
    },
  },
}
</script>
