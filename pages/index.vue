<template>
  <div>
    <section>
      <Slider :items="carousel" class="pt-7 pb-14 slider-home"></Slider>
    </section>

    <section>
      <div
        class="rounded-lg bg-gradient-to-b from-gray-100 to-gray-300 p-5 mx-5"
      >
        <h2 class="font-semibold text-4xl italic text-emerald-700 mb-5">
          L'actu des Crocos
        </h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2">
            <div v-for="actu in actus" :key="actu.title" class="mb-7">
              <Actu :actu="actu" />
            </div>
          </div>
          <div class="sm:w-1/2 md:w-1/4 px-5">
            <nuxt-img
              src="images/origine-france.webp"
              format="webp"
              alt="Livres conçus et fabriqués en France"
            />
          </div>
          <div class="sm:w-1/2 md:w-1/4 px-5">
            <nuxt-img src="images/gluten.png" format="webp" alt="Sans gluten" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const carousel = await $content("carousel").sortBy("order", "asc").fetch();
    const actus = await $content("actualites")
      .sortBy("date", "desc")
      .limit(2)
      .fetch();
    return {
      carousel,
      actus,
    };
  },
};
</script>

<style scoped>
.slider-home {
  z-index: 2;
}

h2 {
  font-family: "Acme", sans-serif;
}
</style>
