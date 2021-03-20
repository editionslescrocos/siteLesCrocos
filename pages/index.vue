<template>
  <Layout :networks="networks" :menus="menus" :footer="footer" isHOne>
    <section>
      <Slider
        :items="slider"
        class="mx-5 mt-14 shadow-xl mb-10 slider-home"
      ></Slider>
    </section>

    <div class="mt-20 mx-5">
      <section>
        <h2 class="text-customGreen text-3xl text-center md:text-left mb-4">
          {{ general.presentationTitle }}
        </h2>
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-1/2 text-lg">
            <p>
              {{ general.presentationText }}
            </p>
            <p v-if="general.presentationURL" class="text-center md:text-left">
              <nuxt-link :to="general.presentationURL">
                <Btn color="customGreen" class="mt-5">En savoir plus </Btn>
              </nuxt-link>
            </p>
          </div>
          <div class="w-1/2 md:w-1/4 px-8 text-right pt-5 md:pt-0">
            <nuxt-img
              src="images/tampon_croco.svg"
              alt="Tampon imprimé en France"
              height="200"
              width="200"
            />
          </div>
          <div class="w-1/2 md:w-1/4 px-8">
            <nuxt-img
              src="images/tampon_loup.svg"
              alt="Tampon livres garantis sans loups"
              height="200"
              width="200"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const slider = await $content("slider").sortBy("order", "asc").fetch();
    const actus = await $content("actualites")
      .sortBy("date", "desc")
      .limit(3)
      .fetch();

    const general = await $content("general").fetch();

    const links = await $content("links").fetch();
    const { menus, networks, footer } = links;

    return {
      slider,
      actus,
      networks,
      menus,
      general,
      footer,
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-home {
  z-index: 2;
}

h2 {
  font-family: "Acme", sans-serif;
}
</style>
