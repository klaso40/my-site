<template>
  <div class="my-card">
    <div class="my-card-title">
      <div class="image"><slot name="image"> </slot></div>
      <h2 class="sub-heading">{{ title }}</h2>
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

<style lang="scss" scoped>
h2 {
  text-align: center;
  width: 100%;
}
.my-card-title {
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  align-items: center;
  .image {
    width: 70px;
    position: absolute;
    z-index: -1;
  }
}
// @media (max-width: 768px) {
//   .my-card {
//     margin: 0 10px;
//     img {
//       width: 50px;
//     }
//   }
// }
</style>
