<template>
  <div class="text-center">
    <nuxt-link :to="product.path">
      <nuxt-img
        :src="`${product.imageProduct}`"
        format="webp"
        width="400"
        height="400"
        fit="outside"
      />
    </nuxt-link>
    <h3 class="text-xl font-semibold my-3">{{ product.title }}</h3>
    <Btn :to="product.path">Découvrir</Btn>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
