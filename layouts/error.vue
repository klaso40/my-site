<template>
  <div class="container center">
    <h1>
      {{ message }}
    </h1>

    <p v-if="statusCode === 404">
      <nuxt-link to="/" class="button"> Návrat domov </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
}
</script>

<style lang="scss" scoped>
.center {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
