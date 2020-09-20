<template>
  <div id="vueLogo">
    <svg
      :width="width"
      viewBox="0 0 256 221"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="green-part"
        d="M0 0L128 220.8L256 0H204.8L128 132.48L50.56 0H0Z"
        fill="#41B883"
      />
      <path
        id="blue-part"
        d="M50.56 0L128 133.12L204.8 0H157.44L128 51.2L97.92 0H50.56Z"
        fill="#35495E"
      />
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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#vueLogo',
        start: 'bottom bottom',
      },
    })
    tl.fromTo(
      '#green-part',
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        stroke: 'rgb(65, 184, 131)',
        strokeWidth: 4,
        fill: 'transparent',
      },
      {
        strokeDashoffset: 0,
        duration: 1,
        delay: 0.5,
        ease: 'ease',
      }
    )
    tl.fromTo(
      '#blue-part',
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        stroke: 'rgb(53, 73, 94)',
        strokeWidth: 4,
        fill: 'transparent',
      },
      {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'ease',
      },
      '<'
    )
    tl.fromTo(
      '#green-part',
      {
        fill: 'transparent',
      },
      {
        fill: 'rgb(65, 184, 131)',

        duration: 0.5,
        ease: 'ease',
      }
    )
    tl.fromTo(
      '#blue-part',
      {
        fill: 'transparent',
      },
      {
        fill: 'rgb(53, 73, 94)',

        duration: 0.5,
        ease: 'ease',
      },
      '<'
    )
  },
}
</script>

<style lang="scss" scoped></style>
