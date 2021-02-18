<template>
  <div class="text-center">
    <nuxt-link :to="book.path">
      <nuxt-img
        :src="`${book.image}`"
        format="webp"
        width="400"
        height="400"
        fit="outside"
      />
    </nuxt-link>
    <h3 class="text-2xl">{{ book.title }}</h3>
    <Btn :to="book.path">Découvrir</Btn>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
