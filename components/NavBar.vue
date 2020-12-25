<template>
  <header>
    <DesktopNavBar />
    <MobileNavBar />
  </header>
</template>

<script>
import DesktopNavBar from './navigation/DesktopNavBar.vue'
import MobileNavBar from './navigation/MobileNavBar.vue'
export default {
  components: {
    DesktopNavBar,
    MobileNavBar,
  },
}
</script>
