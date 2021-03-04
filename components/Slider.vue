<template>
  <div class="slider-wrapper px-5 overflow-hidden">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="(item, key) in items" :key="key" class="relative">
        <nuxt-link :to="item.url">
          <nuxt-picture
            :src="`${item.image}`"
            class="w-full rounded-t-lg"
            fit="cover"
            format="webp"
            height="300"
            width="800"
            :placeholder="require('@/assets/placeholder.webp')"
          />
        </nuxt-link>

        <div class="slider-text w-full">
          <div
            class="rounded-b-lg bottom-0 left-0 py-5 px-5 text-white bg-gradient-to-r from-emerald-700 to-emerald-500 w-full"
          >
            <div class="md:flex">
              <div class="flex-1">
                <p class="font-semibold text-xl md:text-3xl">
                  {{ item.title }}
                </p>
                <nuxt-content
                  :document="item"
                  class="font-semibold text-md md:text-xl"
                ></nuxt-content>
              </div>

              <div class="hidden md:block flex justify-end py-5">
                <nuxt-link v-if="item.url" :to="item.url">
                  <Btn>En savoir plus</Btn>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
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

<style style="scoped">
.slider-wrapper {
  position: relative;
}

.slider-text {
  z-index: 1;
  height: 100%;
}

.slick-prev {
  left: 15px;
  z-index: 1;
}
.slick-next {
  right: 15px;
}

.slick-prev:before,
.slick-next:before {
  height: 48px;
  width: 48px;
  font-size: 48px;
  color: #11776e;
}

.slick-prev,
.slick-next {
  height: 48px;
  width: 48px;
}

.slick-dots li button:before,
.slick-dots li.slick-active button:before {
  color: white;
}
</style>
