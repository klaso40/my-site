<template>
  <div class="my-card">
    <div class="my-card-title">
      <img :src="imgPath" alt="" />
      <h2>{{ title }}</h2>
    </div>
    <slot></slot>
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
.my-card-title {
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  align-items: center;
  img {
    width: 70px;
    position: absolute;
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
