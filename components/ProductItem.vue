<template>
  <div class="text-center">
    <nuxt-link :to="product.path">
      <nuxt-img
        :src="imagePath(`${product.imageProduct}`)"
        format="jpeg"
        width="400"
        height="400"
        fit="inside"
        :alt="`image
        du
        produit
        ${product.title}`"
      />
    </nuxt-link>
    <nuxt-link :to="product.path">
      <Btn isNotRounded isFull>{{ product.title }}</Btn>
    </nuxt-link>
  </div>
</template>

<script>
import imagePathTransformer from "@/mixins/imagePathTransformer";

export default {
  mixins: [imagePathTransformer],
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
