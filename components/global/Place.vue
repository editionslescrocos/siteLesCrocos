<template>
  <div class="md:flex md:justify-between mb-8">
    <div>
      <span class="font-bold" v-if="title">{{ title }}</span
      ><br />
      <slot></slot>
      <p v-if="address">
        <a
          :href="`https://www.openstreetmap.org/search?query=${address}`"
          target="blank"
          class="underline"
        >
          <img
            class="inline-block w-5 h-5 mr-1"
            :src="require('@/assets/pin.svg')"
            alt=""
            height="20"
            width="20"
          />
          {{ address }}</a
        >
      </p>
    </div>

    <div class="flex">
      <div>
        <a v-if="website" :href="website" target="blank">
          <Btn
            ><img
              :src="require('@/assets/chain.svg')"
              alt=""
              height="20"
              width="20"
              class="inline-block w-5 h-5 mr-1"
            />
            Site web</Btn
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
