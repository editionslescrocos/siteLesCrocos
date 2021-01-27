<template>
  <div class="carousel-wrapper px-5">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="(item, key) in items" :key="key" class="relative">
        <!-- <a :href="item.url || '#'"> -->
        <div class="carousel-text absolute align-bottom w-full">
          <div
            class="absolute rounded-b-lg bottom-0 left-0 py-5 px-5 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white opacity-90 w-full"
          >
            <p class="font-semibold text-xl md:text-3xl">{{ item.title }}</p>
            <nuxt-content
              :document="item"
              class="font-semibold text-md md:text-xl"
            ></nuxt-content>
          </div>
        </div>

        <nuxt-img
          :src="`${item.image}`"
          format="webp"
          quality="70"
          class="w-full rounded-lg"
          fit="cover"
          width="550"
          height="300"
        />

        <!-- </a> -->
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: true,
        dots: true,
      },
    };
  },
};
</script>

<style>
.carousel-wrapper {
  position: relative;
}

.carousel-text {
  z-index: 50;
  height: 100%;
}
</style>
