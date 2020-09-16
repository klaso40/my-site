<template>
  <div id="vuetifyLogo">
    <svg
      :width="width"
      viewBox="0 0 256 293"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g id="top-arrow">
        <polyline fill="#1697F6" points="128 0 68 0 128 141.816367"></polyline>
        <polyline fill="#1867C0" points="128 0 188 0 128 141.816367"></polyline>
      </g>
      <g id="bottom-arrow">
        <polyline
          fill="#7BC6FF"
          points="128 182.743732 128 292.459439 0 42.5575194 67.0490402 42.5575194"
        ></polyline>
        <polyline
          fill="#AEDDFF"
          points="128 182.746214 128 292.461921 256 42.5600014 188.95096 42.5600014"
        ></polyline>
      </g>
    </svg>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    width: {
      type: String,
      default: '256px',
    },
  },
  mounted() {
    gsap.fromTo(
      '#top-arrow',
      {
        transform: 'translateY(-20px)',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#vuetifyLogo',
          start: 'bottom bottom',
        },
        transform: 'translateY(0)',
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: 'ease',
      }
    )
    gsap.fromTo(
      '#bottom-arrow',
      {
        transform: 'translateY(-60px)',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#vuetifyLogo',
        },
        transform: 'translateY(0)',
        opacity: 1,
        duration: 3,
        delay: 0.5,
        ease: 'ease',
      }
    )
  },
}
</script>

<style lang="scss" scoped></style>
