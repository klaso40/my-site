<template>
  <a
    :href="link"
    class="shadow-md rounded-md block p-2 w-52 hover:bg-primary hover:text-white"
    ><div class="flex flex-row items-center">
      <img :src="imgPath" alt="" class="h-10" />
      <div class="flex flex-col justify-start ml-4">
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
