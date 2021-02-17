<template>
  <div>
    <div class="grid grid-cols-2 gap-6">
      <div v-for="zone in zones" :key="zone" class="text-center">
        <a :href="`zones/${zone.slug}`">
          <nuxt-img
            :src="`${zone.image}`"
            height="300"
            width="400"
            format="webp"
            class="rounded-lg"
            alt=""
          ></nuxt-img>
          <h2 class="text-2xl">{{ zone.title }}</h2>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zones: [],
    };
  },
  async fetch() {
    const zones = await this.$content("zones").sortBy("order", "asc").fetch();
    this.zones = zones;
  },
};
</script>

<style lang="scss" scoped>
img {
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
