<template>
  <div class="slider-wrapper overflow-hidden">
    <VueSlickCarousel v-bind="slickOptions">
      <div
        v-for="(item, key) in items"
        :key="key"
        class="relative"
        style="background-color: pink"
      >
        <nuxt-link :to="item.url">
          <nuxt-picture
            :src="`${item.image}`"
            class="w-full"
            fit="inside"
            format="webp"
            height="400"
            width="800"
            :placeholder="require('@/assets/placeholder.webp')"
          />
        </nuxt-link>

        <div class="slider-text w-full">
          <div class="py-3 px-3">
            <div class="md:flex">
              <div class="flex-1">
                <span class="font-semibold item-title">
                  {{ item.title }}
                </span>
                <nuxt-content :document="item"></nuxt-content>
              </div>

              <!-- <div class="hidden md:block flex justify-end py-5">
                <nuxt-link v-if="item.url" :to="item.url">
                  <Btn>En savoir plus</Btn>
                </nuxt-link>
              </div> -->
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
p {
  margin: 0;
  padding: 0;
}

.slider-wrapper {
  position: relative;
}

.slider-text {
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
  color: #c91f3b;
  opacity: 1;
}

.slick-prev,
.slick-next {
  height: 48px;
  width: 48px;
}

.slick-dots {
  text-align: right;
}

.slick-dots li button:before {
  margin-top: -50px;
  font-size: 20px;
  height: 20px;
  width: 20px;

  color: gray;
}

.slick-dots li.slick-active button:before {
  color: #c91f3b;
}
</style>
