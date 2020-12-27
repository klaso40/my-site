<template>
  <div class="my-card">
    <div class="flex flex-row items-center my-8">
      <div class="absolute">
        <slot name="image"> </slot>
      </div>
      <h2 class="sub-heading mx-auto">{{ title }}</h2>
    </div>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  props: {
    imgPath: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
