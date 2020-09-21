<template>
  <a :href="link"
    ><div>
      <img :src="imgPath" alt="" />
      <div>
        <span>{{ title }}</span>
        <span>{{ description }}</span>
      </div>
    </div></a
  >
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    imgPath: {
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
  },
}
</script>

<style lang="scss" scoped>
a {
  div {
    margin: 10px 0;
    background: #0a1b37;
    display: flex;
    flex-direction: row;
    width: fit-content;
    align-items: center;
    padding: 0px 15px 0px 15px;
    border-radius: 10px;
    img {
      height: 25px;
    }
    div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      span:first-child {
        color: white;
        font-family: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Regular',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 10px;
        font-weight: lighter;
      }
      span {
        color: white;
        // font-family: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Regular',
        //   'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-family: 'Montserrat';
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}
</style>
