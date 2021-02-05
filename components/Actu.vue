<template>
  <div>
    <nuxt-img
      :src="`/images/${actu.image}`"
      format="webp"
      height="200"
      fill="cover"
    ></nuxt-img>
    <h3 class="font-semibold text-xl text-emerald-700">
      {{ actu.title }}
    </h3>
    <p>{{ actu.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    actu: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
