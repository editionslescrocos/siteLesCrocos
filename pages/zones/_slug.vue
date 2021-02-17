<template>
  <Layout :networks="networks" :menus="menus" :footer="footer">
    <article>
      <div v-if="doc.image" class="relative z-10 pt-7">
        <nuxt-picture
          :src="doc.image"
          format="webp"
          fit="cover"
          class="rounded-md shadow-inner border-gray-50 border-2"
          :alt="doc.imageAlt"
          width="900"
          height="400"
        ></nuxt-picture>
      </div>
      <div
        class="page relative container mx-auto z-20 md:rounded-lg shadow-xl bg-gray-50 pb-24 px-5 md:px-12 md:w-11/12 lg:w-11/12 xl:w-10/12 content"
        :class="doc.image && 'md:-mt-32'"
      >
        <header>
          <div class="titles">
            <div class="pt-10">
              <h1 class="text-4xl text-center font-bold mb-3">
                Nous trouver à {{ doc.title }}
              </h1>
            </div>
          </div>
        </header>

        <list-alternate class="mt-16" :items="libraries" onlyHref>
        </list-alternate>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`zones/${params.slug}` || "index").fetch();
    const libraries = await $content("places" || "index")
      .where()
      .fetch();

    const general = await $content("general").fetch();

    const links = await $content("links").fetch();
    const { menus, networks, footer } = links;

    return {
      doc,
      libraries,
      networks,
      menus,
      general,
      footer,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
