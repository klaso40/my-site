<template>
  <svg id="nuxt" viewBox="0 0 256 189">
    <g>
      <polygon
        id="left-triangle"
        fill="#48B884"
        points="109.7766 0.0009 -0.0004 188.2259 219.5526 188.2259"
      ></polygon>
      <polygon
        id="right-triangle"
        fill="#3F7F70"
        points="72.8361 188.226 255.9991 188.226 164.4181 31.198"
      ></polygon>
      <polygon
        id="middle-triangle"
        fill="#36495D"
        points="72.8361 188.226 219.5521 188.226 146.1941 62.444"
      ></polygon>
    </g>
  </svg>
</template>

<script>
import gsap from 'gsap'

export default {
  // props: {
  //   width: {
  //     type: String,
  //     default: '256px',
  //   },
  // },
  mounted() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#nuxt',
        start: 'bottom bottom',
      },
    })
    tl.fromTo(
      '#left-triangle',
      {
        transform: 'translateX(40px)',
        opacity: 0,
      },
      {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: 'ease',
      },
      '<'
    )
    tl.fromTo(
      '#right-triangle',
      {
        transform: 'translateX(-40px)',
        opacity: 0,
      },
      {
        transform: 'translateX(0)',
        opacity: 1,
        duration: 1.5,
        ease: 'ease',
      },
      '<'
    )
    tl.fromTo(
      '#middle-triangle',
      {
        transform: 'translateY(-40px)',
        opacity: 0,
      },
      {
        transform: 'translateY(0)',
        opacity: 1,
        duration: 1.5,
        ease: 'ease',
      },
      '<'
    )
  },
}
</script>

<style lang="scss" scoped></style>
