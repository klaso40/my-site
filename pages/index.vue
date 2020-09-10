<template>
  <div class="container">
    <div class="center">
      <div class="photo"></div>
      <div id="my-title">
        Ahoj, moje meno je Matúš <br />
        a som programátor
        <button class="button">Zisti viac</button>
      </div>
      <div class="astronaut-container">
        <img src="~/assets/astronaut.png" alt="" />
      </div>
    </div>
    <h2>Zaujímam sa o</h2>
    <div class="columns">
      <div class="column">
        <InterestCard
          title="App development"
          :nuxt-link="{ name: 'appDevelopment' }"
          :image-path="require('~/assets/app-development.svg')"
        />
      </div>
      <div class="column">
        <InterestCard
          title="Web development"
          :nuxt-link="{ name: 'webDevelopment' }"
          :image-path="require('~/assets/web-development.svg')"
        />
      </div>
      <div class="column">
        <InterestCard
          title="Dizajn"
          :image-path="require('~/assets/design.svg')"
        />
      </div>
    </div>
    <h1>Pracujem hlavne s</h1>
    <div class="columns images-container">
      <div class="column">
        <img src="~/assets/vue.svg" alt="" />
      </div>
      <div class="column">
        <img src="~/assets/vuetify.svg" alt="" />
      </div>
      <div class="column">
        <img src="~/assets/nuxt.svg" alt="" />
      </div>
      <div class="column">
        <img src="~/assets/laravel.svg" alt="" />
      </div>
      <div class="column">
        <img src="~/assets/flutter.svg" alt="" />
      </div>
      <div class="column">
        <img src="~/assets/swift.svg" alt="" />
      </div>
    </div>
    <OtherTechnologies />
  </div>
</template>

<script>
import InterestCard from '../components/InterestCard.vue'
import OtherTechnologies from '../components/OtherTechnologies.vue'
export default {
  components: {
    InterestCard,
    OtherTechnologies,
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
    height: 330px;
    width: 330px;
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
    //border-radius: 50%;
    background: white;
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
