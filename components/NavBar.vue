<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item logo" href="https://bulma.io">MK</a>

        <a
          role="button"
          class="navbar-burger burger"
          :class="[expanded ? 'is-active' : '']"
          aria-label="menu"
          aria-expanded="false"
          data-target="nav-menu"
          @click.prevent="expanded = !expanded"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="nav-menu"
        class="navbar-menu"
        :class="[expanded ? 'is-active' : '']"
      >
        <div class="navbar-start">
          <nuxt-link :to="{ name: 'index' }" class="navbar-item"
            >Domov</nuxt-link
          >

          <nuxt-link :to="{ name: 'appDevelopment' }" class="navbar-item"
            >App development</nuxt-link
          >
          <nuxt-link :to="{ name: 'webDevelopment' }" class="navbar-item"
            >Web development</nuxt-link
          >
          <nuxt-link :to="{ name: 'cv' }" class="navbar-item"
            >Zivotopis</nuxt-link
          >
        </div>

        <div class="navbar-end">
          <a href="" class="navbar-item"
            ><img src="~/assets/linkedin.svg" alt=""
          /></a>
          <a href="" class="navbar-item"
            ><img src="~/assets/twitter.svg" alt=""
          /></a>
          <div class="navbar-item">
            <nuxt-link :to="{ name: 'contact' }" class="button"
              >Kontakt</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  background: #0a1b37;
  .logo {
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: bold;
    color: white;
  }
  .navbar-burger {
    color: white !important;
  }
  .navbar-menu {
    &.is-active {
      animation: navAnimOpen 0.2s ease-in-out;
      //transition: all 0.3s ease;
      background: transparent;
    }
    .navbar-start {
      .navbar-item {
        font-family: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Regular',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 20px;
        color: white;
        &:hover {
          transition: 0.3s ease;
          color: #b3b3b3;
          background: transparent;
        }
      }
    }
    .navbar-end {
      .navbar-item {
        &:hover {
          transition: 0.3s ease;
          color: #b3b3b3;
          background: transparent;
        }
        img {
          color: #b3b3b3;
        }
      }
      .button {
        border-radius: 10px;
        background: #22324b;
        border: none;
        color: #ffffff;
        width: 100px;
      }
    }
  }
}
@keyframes navAnimOpen {
  0% {
    display: none;
    opacity: 0;
    max-height: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
    max-height: 396px;
  }
}

.nuxt-link-exact-active {
  color: red !important;
  background: transparent !important;
}
</style>
