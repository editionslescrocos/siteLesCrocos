<template>
  <nuxt-img
    v-if="image"
    :src="image"
    fit="cover"
    class="rounded-md shadow-inner border-gray-50 border-2"
    :alt="imageAlt"
    format="webp"
    quality="80"
    width="1600"
    height="600"
  ></nuxt-img>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ""
    },
    imageAlt: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped></style>
