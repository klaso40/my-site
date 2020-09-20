<template>
  <div>
    <img id="image" src="~/assets/astronaut.png" alt="" />
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
    this.flyAstronaut()
  },
  methods: {
    flyAstronaut() {
      const tl = gsap.timeline()
      tl.to('#image', {
        x: 'random(0, 150, 0)',
        y: 'random(0, 150, 0)',
        rotationZ: 'random(-72, 72, 0)',
        duration: 3,
        ease: 'linear',
        repeat: -1,
        repeatRefresh: true,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  height: 150px;
  // position: absolute;
}
</style>
