<template>
  <div id="flutterLogo">
    <svg
      :width="width"
      :height="width"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g transform="matrix(.061615 0 0 .061615 -1.430818 -1.2754)">
        <path
          id="flutter-middle"
          d="m360.3 779.7 159.7 159.8 439.4-439.5h-319.5z"
          fill="#39cefd"
        />
        <path
          id="flutter-top"
          d="m639.9 20.7h319.5l-679 679.1-159.8-159.8z"
          fill="#39cefd"
        />
        <path
          id="flutter-bottom"
          d="m520 939.5 119.9 119.8h319.5l-279.6-279.6z"
          fill="#03569b"
        />
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
      default: '64px',
    },
    delay: {
      type: Number,
      default: 0.5,
    },
  },
  mounted() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#flutterLogo',
        // start: 'top top',
      },
    })
    tl.fromTo(
      '#flutter-top',
      {
        transform: 'translateX(150px)',
        opacity: 0,
      },
      {
        transform: 'translateX(0px)',
        opacity: 1,
        delay: parseFloat(this.delay),
      },
      '<'
    )
    tl.fromTo(
      '#flutter-middle',
      {
        transform: 'translateX(-50px)',
        opacity: 0,
      },
      {
        transform: 'translateX(0px)',
        opacity: 1,
      },
      '<'
    )
    tl.fromTo(
      '#flutter-bottom',
      {
        transform: 'translateX(-150px)',
        opacity: 0,
      },
      {
        transform: 'translateX(0px)',
        opacity: 1,
      },
      '<'
    )
  },
}
</script>

<style lang="scss" scoped></style>
