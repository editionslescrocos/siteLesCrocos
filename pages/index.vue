<template>
  <Layout :networks="networks" :menus="menus" :footer="footer">
    <section>
      <Slider :items="carousel" class="pt-7 pb-20 slider-home"></Slider>
    </section>

    <div class="mt-5 mx-5 text-white">
      <section>
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-1/2 text-lg">
            <h2 class="font-semibold text-4xl italic text-white mb-4">
              {{ general.presentationTitle }}
            </h2>
            <p>
              {{ general.presentationText }}
            </p>
            <p class="text-center md:text-left">
              <Btn :to="general.presentationURL" class="mt-5" color="yellow-500"
                >En savoir plus</Btn
              >
            </p>
          </div>
          <div class="w-1/2 md:w-1/4 px-8 text-right pt-5 md:pt-0">
            <nuxt-picture
              src="images/tampon_croco.png"
              format="webp"
              alt="Tampon imprimé en France"
              height="200"
              width="200"
              fit="cover"
              class="bg-white rounded-full"
            />
          </div>
          <div class="w-1/2 md:w-1/4 px-8 pt-5">
            <nuxt-picture
              src="images/tampon_loup.png"
              format="webp"
              alt="Tampon livres garantis sans loups"
              height="150"
              width="150"
              fit="cover"
              class="bg-white rounded-full"
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
    const carousel = await $content("carousel").sortBy("order", "asc").fetch();
    const actus = await $content("actualites")
      .sortBy("date", "desc")
      .limit(3)
      .fetch();

    const general = await $content("general").fetch();

    const links = await $content("links").fetch();
    const { menus, networks, footer } = links;

    return {
      carousel,
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
