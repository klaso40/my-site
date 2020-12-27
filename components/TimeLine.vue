<template>
  <div id="timeLine">
    <div class="time-line">
      <div id="circle" class="circle"></div>
      <div class="border-line-container">
        <div id="border-1" class="border-line"></div>
        <div id="border-2" class="border-line"></div>
        <div id="border-3" class="border-line"></div>
        <div id="border-4" class="border-line"></div>
      </div>
    </div>
    <div class="time-line-content">
      <h3 id="year" class="sub-heading">{{ year }}</h3>
      <h4 id="school" class="sub-heading">{{ school }}</h4>
      <div id="text">
        <slot name="first"></slot>
        <br />
        <slot name="second"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    year: {
      type: String,
      default: '0',
    },
    school: {
      type: String,
      default: '',
    },
  },
  mounted() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#timeLine',
        //  start: 'top top',
      },
    })
    tl.fromTo(
      '#circle',
      {
        opacity: 0,
        transform: 'scale(0,0)',
        transformOrigin: 'top',
      },
      {
        opacity: 1,
        duration: 0.3,
        transform: 'scale(1,1)',

        ease: 'ease',
      }
    )
    tl.fromTo(
      '#year',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        ease: 'ease',
      }
    )
    tl.fromTo(
      '#school',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        ease: 'ease',
      }
    )
    tl.fromTo(
      '#border-1',
      {
        opacity: 0,
        transform: 'scale(0,0)',
        transformOrigin: 'top',
      },
      {
        opacity: 1,
        duration: 0.3,
        transform: 'scale(1,1)',

        ease: 'ease',
      }
    )
    tl.fromTo(
      '#border-2',
      {
        opacity: 0,
        transform: 'scale(0,0)',
        transformOrigin: 'top',
      },
      {
        opacity: 1,
        duration: 0.3,
        transform: 'scale(1,1)',

        ease: 'ease',
      }
    )
    tl.fromTo(
      '#border-3',
      {
        opacity: 0,
        transform: 'scale(0,0)',
        transformOrigin: 'top',
      },
      {
        opacity: 1,
        duration: 0.3,
        transform: 'scale(1,1)',

        ease: 'ease',
      }
    )
    tl.fromTo(
      '#border-4',
      {
        opacity: 0,
        transform: 'scale(0,0)',
        transformOrigin: 'top',
      },
      {
        opacity: 1,
        duration: 0.3,
        transform: 'scale(1,1)',

        ease: 'ease',
      }
    )
    tl.fromTo(
      '#text',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        transform: 'scale(1,1)',

        ease: 'ease',
      }
    )
  },
}
</script>

<style lang="scss" scoped>
#timeLine {
  display: flex;
  z-index: -20;
  .time-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    .circle {
      margin-top: 10px;
      height: 30px;
      width: 30px;
      background: white;
      border-radius: 50%;
    }
    .border-line-container {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 100%;
      .border-line {
        width: 5px;
        height: 30px;
        background: white;
        border-radius: 10px;
        // margin-top: 20px;
      }
    }
  }
  .time-line-content {
    margin-left: 15px;
    display: block;
  }
}
</style>
