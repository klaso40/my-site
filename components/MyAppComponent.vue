<template>
  <div class="columns">
    <div class="column">
      <img src="~/assets/WS-List.png" alt="" />
    </div>
    <div class="column">
      <h2>WS List</h2>
      <p>
        WS List je krásny jednoduchý to-do list, pomocou ktorého sa stanú tvoje
        dni viac zorganizované a menej stresujúce.
      </p>
      <p>
        Vďaka aplikácií WS List môžeš ľahko a pohodlne usporadúvať svoje úlohy,
        či už sa jedná o školu, prácu alebo domácnosť. Prostredníctvom
        intuitívneho dizajnu aplikácie sa v nej rýchlo a ľahko zorientuješ.
      </p>
      <div class="my-list">
        WS List ti umožňuje:
        <ul>
          <li>Jednoduché usporiadanie úloh do vlastných zoznamov</li>
          <li>Vytváranie úloh kedykoľvek a kdekoľvek</li>
          <li>Zostať informovaným vďaka upozorneniam a nič nezmeškať</li>
          <li>Formovať vlastné zoznamy odlišnými farbami</li>
        </ul>
      </div>

      <StoreButton
        :img-path="require('~/assets/google-play.svg')"
        title="GET IT ON"
        description="Google play"
        :link="googlePlay"
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

<style lang="scss" scoped>
.columns {
  background: $background-color;
  box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
  border-radius: 10px;
  padding: 30px 20px;
  .column {
    img {
      height: 700px;
    }
  }
}
p {
  margin: 20px 0;
}
.my-list {
  color: white;
  font-family: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #e6e6e6;
  line-height: 24px;
  ul {
    list-style-type: disc;

    list-style-position: inside;
  }
  // ul li::before {
  //   content: '\200B';
  // }
}
</style>
