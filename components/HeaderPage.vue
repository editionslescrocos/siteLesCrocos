<template>
  <div
    :class="`header

      pb-14
      md:py-10
      mb-5`"
  >
    <div class="container mx-auto py-5 px-5 md:w-10/12 lg:w-9/12 xl:w-7/12">
      <div class="flex items-center">
        <div class="hidden md:block flex-initial mr-10" v-if="doc.logo"></div>
        <div class="flex-initial">
          <h1 class="white">
            {{ doc.title }}
          </h1>
          <p
            :class="`text-left text-xl text-${doc.colorText || 'white'}`"
            v-if="doc.description"
          >
            {{ doc.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    doc: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
</style>
