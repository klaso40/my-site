<template>
  <div id="swiftUILogo">
    <img src="~/assets/swift.svg" alt="" :width="width" />
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    width: {
      type: String,
      default: '70px',
    },
    delay: {
      type: String,
      default: '0.5',
    },
  },
  mounted() {
    gsap.fromTo(
      '#swiftUILogo',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '#swiftUILogo',
          // start: 'top top',
        },
        delay: parseFloat(this.delay),
        duration: 1,
      }
    )
  },
}
</script>

<style lang="scss" scoped></style>
