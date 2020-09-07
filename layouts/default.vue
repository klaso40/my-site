<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
$background-color: #0a1b37;
html {
  font-family: 'Lucida Grande', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: $background-color;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
