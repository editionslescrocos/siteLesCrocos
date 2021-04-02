<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="item.order"
      class="items-top align-top"
      :class="[
        Number.isInteger(index / 2)
          ? 'flex-row-reverse my-7 md:flex mb-20'
          : 'my-7 md:flex mb-20'
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
            :class="portrait ? 'rounded-full border-8 border-customGreen' : ''"
            v-if="item.image"
            :alt="item.imageAlt"
          ></nuxt-img>
        </nuxt-link>

        <nuxt-img
          v-if="onlyHref && item.image"
          :src="item.image"
          sizes="400"
          format="webp"
          height="300"
          fit="cover"
          :width="portrait ? '300' : '500'"
          class="md:mb-7 mx-auto"
          :class="portrait ? 'rounded-full border-8 border-customGreen' : ''"
          :alt="item.imageAlt"
        ></nuxt-img>
      </div>

      <div class="flex-1">
        <h3 class="text-2xl mb-2 md:pt-0">
          {{ item.title }}
        </h3>
        <p v-show="!item.description" class="text-md">
          {{ item.body.children[0].children[0].value }}
        </p>

        <p v-if="item.description" class="text-md">{{ item.description }}</p>

        <p v-if="item.address" class="mt-3 font-semibold">
          <img
            height="25"
            width="25"
            :src="require('@/assets/pin.svg')"
            alt=""
            class="inline-block"
          />
          <span>Adresse</span> :
          <a
            target="blank"
            :href="
              `https://www.openstreetmap.org/search?query=#map=19/45.75763/4.87488`
            "
            class="underline"
            >{{ item.address }}</a
          >
        </p>

        <nuxt-link :to="item.path">
          <Btn v-if="!item.href && !onlyHref" class="mt-3 mr-2 inline-block"
            >En savoir plus</Btn
          >
        </nuxt-link>

        <a :href="item.href" target="blank">
          <Btn v-if="item.href" class="mt-3 mr-2 inline-block" target="blank">
            <img
              height="25"
              width="25"
              :src="require('@/assets/chain.svg')"
              alt=""
              class="inline-block"
            />
            Voir le site</Btn
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
    portrait: {
      type: Boolean,
      default: false
    },
    onlyHref: {
      type: Boolean,
      default: false
    },
    followSlug: {
      type: Boolean,
      default: false
    }
  }
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
