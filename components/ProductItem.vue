<template>
  <div class="text-center">
    <nuxt-link :to="product.path">
      <nuxt-img
        :src="`${product.imageProduct}`"
        format="jpeg"
        width="400"
        height="400"
        fit="inside"
        :alt="
          `image
        du
        produit
        ${product.title}`
        "
      />
    </nuxt-link>
    <nuxt-link :to="product.path">
      <Btn isNotRounded isFull>{{ product.title }}</Btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>
