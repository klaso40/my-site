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
          start: 'bottom bottom',
        },
        delay: 0.5,
        duration: 1,
      }
    )
  },
}
</script>

<style lang="scss" scoped></style>
