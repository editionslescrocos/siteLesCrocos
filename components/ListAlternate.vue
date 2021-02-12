<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="item.order"
      class="items-center align-center"
      :class="[
        Number.isInteger(index / 2)
          ? 'flex-row-reverse my-7 md:flex mb-20'
          : 'my-7 md:flex mb-20',
      ]"
    >
      <div
        class="flex-1 inline-block container"
        :class="[Number.isInteger(index / 2) ? 'md:ml-5 ' : 'md:pr-5 ']"
      >
        <EmbedYoutube v-if="item.video">{{ item.video }}</EmbedYoutube>

        <nuxt-link :to="item.path" v-if="!onlyHref">
          <nuxt-img
            :src="item.image"
            sizes="400"
            format="webp"
            height="300"
            :width="portrait ? '300' : 'auto'"
            class="md:mb-7 mx-auto"
            :class="portrait ? 'rounded-full' : ''"
            v-if="item.image"
            :alt="item.imageAlt"
          ></nuxt-img>
        </nuxt-link>
        <nuxt-img
          v-else
          :src="item.image"
          sizes="400"
          format="webp"
          height="300"
          :width="portrait ? '300' : 'auto'"
          class="md:mb-7 mx-auto"
          :class="portrait ? 'rounded-full' : ''"
          v-if="item.image"
          :alt="item.imageAlt"
        ></nuxt-img>
      </div>

      <div class="flex-1">
        <h3 class="text-2xl mb-2 pt-2 md:pt-0 md:mt-5">
          {{ item.title }}
        </h3>
        <p v-if="!item.description" class="text-md">
          <nuxt-content :document="item"></nuxt-content>
        </p>
        <p v-if="item.description" class="text-md">{{ item.description }}</p>

        <Btn v-if="!item.href && !onlyHref" class="mt-3" :to="item.path"
          >En Savoir plus</Btn
        >
        <Btn v-if="item.href" class="mt-3" :href="item.href"
          >En Savoir plus</Btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    portrait: {
      type: Boolean,
      default: false,
    },
    onlyHref: {
      type: Boolean,
      default: false,
    },
    followSlug: {
      type: Boolean,
      default: false,
    },
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
