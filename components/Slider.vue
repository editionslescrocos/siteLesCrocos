<template>
  <div class="slider-wrapper overflow-hidden">
    <VueSlickCarousel v-bind="slickOptions">
      <div
        v-for="(item, key) in items"
        :key="key"
        class="relative"
        :class="`slider-text w-full bg-${item.colorBg} text-${item.colorText}`"
      >
        <a :href="item.url">
          <nuxt-img
            :src="imagePath(item.image)"
            class="w-full image"
            fit="cover"
            format="jpeg"
            sizes="sm:400px md:700px lg:950px"
            :placeholder="require('@/assets/placeholder.png')"
          />
        </a>

        <div style="background-color: powderblue">
          <div class="py-3 px-6">
            <div class="md:flex">
              <div class="flex-1 text-center">
                <span class="item-title">
                  {{ item.title }}
                </span>
                <p class="item-subtitle">{{ item.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import imagePathTransformer from "@/mixins/imagePathTransformer";

export default {
  mixins: [imagePathTransformer],

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

.image {
  height: 550px;
  object-fit: cover;
}

@media (max-width: 500px) {
  .image {
    height: 300px;
  }
}

@media (min-width: 501px) and (max-width: 950px) {
  .image {
    height: 400px;
  }
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
  padding-right: 1em;
}

.slick-dots li button:before {
  margin-top: -40px;
  font-size: 20px;
  height: 20px;
  width: 20px;

  color: gray;
}

.slick-dots li.slick-active button:before {
  color: #c91f3b;
}

@media (max-width: 700px) {
  .slick-dots {
    display: none !important;
  }
}
</style>
