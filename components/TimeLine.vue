<template>
  <div>
    <div class="time-line">
      <div class="circle"></div>
      <div class="border-line-container">
        <div class="border-line"></div>
        <div class="border-line"></div>
        <div class="border-line"></div>
        <div class="border-line"></div>
      </div>
    </div>
    <div class="time-line-content">
      <h3>{{ year }}</h3>
      <h4>{{ school }}</h4>
      <p>
        Gummies sweet biscuit brownie pastry bonbon chocolate cake candy canes.
        Icing cheesecake croissant tart sugar plum sesame snaps brownie. Lemon
        drops wafer candy lemon drops ice cream tiramisu powder lemon drops.
      </p>
      <br />
      <p>
        Gummies sweet biscuit brownie pastry bonbon chocolate cake candy canes.
        Icing cheesecake croissant tart sugar plum sesame snaps brownie. Lemon
        drops wafer candy lemon drops ice cream tiramisu powder lemon drops.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: Number,
      default: 0,
    },
    school: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
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
