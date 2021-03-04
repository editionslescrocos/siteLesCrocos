<template>
  <Layout :networks="networks" :menus="menus" :footer="footer" isHOne>
    <section>
      <Slider :items="slider" class="pt-7 pb-20 slider-home"></Slider>
    </section>

    <div class="mt-5 mx-5 text-gray-50">
      <section>
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-1/2 text-lg">
            <h2
              class="font-semibold text-4xl text-center md:text-left text-white mb-4"
            >
              {{ general.presentationTitle }}
            </h2>
            <p>
              {{ general.presentationText }}
            </p>
            <p v-if="general.presentationURL" class="text-center md:text-left">
              <nuxt-link :to="general.presentationURL" class="mt-5">
                <Btn color="yellow-600">En savoir plus </Btn>
              </nuxt-link>
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
