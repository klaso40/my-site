<template>
  <div>
    <img :src="imagePath" alt="" />
    <h4>{{ title }}</h4>
    <slot></slot>
    <div v-if="Object.keys(nuxtLink).length != 0" class="my-link">
      <nuxt-link :to="nuxtLink"
        >Zisti viac <img src="~/assets/arrow.svg" alt=""
      /></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    nuxtLink: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  background: #22324b;
  padding: 15px 20px;
  height: calc(100%);
  border-radius: 10px;
  position: relative;
  img {
    height: 300px;
  }
  p {
    margin: 15px 0;
  }
  .my-link {
    //position: absolute;
    //bottom: 10px;
    //right: 20px;

    height: fit-content;
    width: fit-content;

    a {
      display: flex;
      align-items: center;
      color: white;
    }

    img {
      height: 20px;
      right: 20px;
      width: 50px;
    }
  }
}
@media (max-width: 768px) {
  div {
    text-align: center;
  }
}
</style>
