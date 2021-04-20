<template>
  <nuxt-link :to="to" text class="flex mt-10 no-underline"
    ><img
      height="25"
      width="25"
      :src="require('@/assets/back.svg')"
      alt=""
      class="mr-1"
    />
    <span class="text-customRed"><slot></slot></span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="scss" scoped></style>
