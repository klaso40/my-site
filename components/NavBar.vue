<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item logo" :to="{ name: 'index' }"
          >MK</nuxt-link
        >
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
      <div id="nav-menu" class="navbar-menu">
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
          <nuxt-link :to="{ name: 'cv' }" class="navbar-item">
            Životopis</nuxt-link
          >
        </div>

        <div class="navbar-end">
          <a
            href="https://www.linkedin.com/in/mat%C3%BA%C5%A1-martin-klasovit%C3%BD-28b2b51a9/"
            class="navbar-item"
            ><img src="~/assets/linkedin.svg" alt=""
          /></a>
          <a href="https://twitter.com/KlasovityMatus" class="navbar-item"
            ><img src="~/assets/twitter.svg" alt=""
          /></a>
          <div class="navbar-item">
            <a href="mailto:matus.klasovity@gmail.com" class="button"
              >Napíš mi</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      expanded: false,
    }
  },
  watch: {
    expanded(newValue, oldValue) {
      if (newValue) {
        this.openNavigation()
      } else {
        this.closeNavigation()
      }
    },
    $route(to, from) {
      this.expanded = false
    },
  },
  methods: {
    openNavigation() {
      gsap.fromTo(
        '.navbar-menu',
        {
          visibility: 'visible',
          background: 'transparent',
          display: 'block',
          height: 0,
        },
        {
          height: 396,
          duration: 0.3,

          ease: 'ease-in-ou',
        }
      )
    },
    closeNavigation() {
      gsap.fromTo(
        '.navbar-menu',
        {
          height: 396,
          visibility: 'hidden',
        },
        {
          height: 0,
          duration: 0.3,
          ease: 'ease-in-ou',
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  background: $background-color;
  .logo {
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: bold;
    color: $text-color;
  }
  .navbar-burger {
    color: $text-color !important;
  }
  .navbar-menu {
    &.is-active {
      display: block;
      animation: navAnimOpen 0.2s ease-in-out;
      //transition: all 0.3s ease;
      background: transparent;
    }
    .navbar-start {
      .navbar-item {
        font-family: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Regular',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 20px;
        color: $text-color;
        &:hover {
          transition: 0.3s ease;
          color: $headline-text-color;
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

.navbar-item.logo.nuxt-link-exact-active {
  color: $text-color !important;
}
.nuxt-link-exact-active {
  color: red !important;
  background: transparent !important;
}
</style>
