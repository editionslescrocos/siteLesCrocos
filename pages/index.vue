<template>
  <Layout :networks="networks" :menus="menus">
    <section>
      <Slider :items="carousel" class="pt-7 pb-20 slider-home"></Slider>
    </section>

    <div class="mt-12 mx-5 text-white">
      <section>
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-1/2 text-lg">
            <h2 class="font-semibold text-4xl italic text-white mb-4">
              La maison d'édition
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ultrices enim vel blandit iaculis. Aenean pellentesque enim eu sem
              sodales lacinia eu et neque. Sed sollicitudin quam velit, sit amet
              ornare ex varius eu. Proin et lorem ut justo lacinia porttitor in
              eget sapien. Phasellus eget malesuada nisi. Praesent accumsan nisl
              varius viverra imperdiet.
            </p>
            <p class="text-center md:text-left">
              <Btn to="#" class="mt-5" color="yellow-500">En savoir plus</Btn>
            </p>
          </div>
          <div class="w-1/2 md:w-1/4 px-16 text-right pt-5 md:pt-0">
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
          <div class="w-1/2 md:w-1/4 px-16 pt-5">
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

    const links = await $content("links").fetch();
    const { menus, networks } = links;

    return {
      carousel,
      actus,
      networks,
      menus,
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
