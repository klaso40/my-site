<template>
  <nav class="hidden md:block w-screen my-2">
    <div
      class="container md:flex flex-row items-center justify-between relative"
    >
      <a
        class="sub-heading hover: cursor-pointer"
        @click.prevent="
          $router.push({
            path: '/',
          })
        "
        >MK</a
      >
      <nuxt-link to="/" class="link">Domov</nuxt-link>
      <nuxt-link to="/web-development" class="link">Web development</nuxt-link>
      <nuxt-link to="/cv" class="link">Životopis</nuxt-link>
      <span
        id="indicator"
        class="bg-primary hidden h-1 w-16 absolute bottom-1 rounded"
      ></span>

      <a href="mailto:matus.klasovity@gmail.com" class="button bg-primary"
        >Napíš mi</a
      >
    </div>
  </nav>
</template>

<script>
import gsap from 'gsap'
export default {
  watch: {
    $route(to, from) {
      this.$nextTick(function () {
        const element = document.querySelector('.nuxt-link-exact-active')
        this.sliderAnimation(element.offsetLeft, element.offsetWidth)
      })
    },
  },
  mounted() {
    const element = document.querySelector('.nuxt-link-exact-active')
    const indicator = document.querySelector('#indicator')
    indicator.style.left = element.offsetLeft + 'px'
    indicator.style.width = element.offsetWidth + 'px'
    indicator.style.display = 'block'
  },

  methods: {
    sliderAnimation(leftValue, widthValue) {
      gsap.to('#indicator', {
        left: leftValue,
        duration: 0.2,
        width: widthValue,
        ease: 'linear',
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
