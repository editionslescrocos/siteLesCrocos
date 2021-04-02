<template>
  <header>
    <div class="titles">
      <div class="pt-10">
        <h1 class="text-4xl text-customGreen text-center  mb-3">
          {{ doc.title }}
        </h1>

        <p v-if="doc.subtitle" class="text-2xl mb-5 text-center">
          {{ doc.subtitle }}
        </p>
      </div>
    </div>
    <p v-if="doc.description" class="text-left text-lg my-7">
      {{ doc.description }}
    </p>
  </header>
</template>

<script>
export default {
  props: {
    doc: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped></style>
