<template>
  <Layout :networks="networks" :menus="menus" :footer="footer">
    <article>

      <div
        class="mx-auto rounded-lg bg-gray-50 py-12 pb-24 px-5 md:px-12 md:w-10/12 lg:w-9/12 xl:w-7/12 content"
      >
      <header
        <HeaderPage :doc="doc" />
      </header>
        <nuxt-picture
          :src="doc.image"
          format="webp"
          fit="cover"
          class="mb-7"
          v-if="doc.image"
          :alt="doc.imageAlt"
          width="900"
          height="350"
        ></nuxt-picture>

        <nuxt-content :document="doc"></nuxt-content>
        <div class="text-center" v-if="doc.buyUrl">
          <a :href="doc.buyUrl">
            <Btn class="mt-20">
              Acheter
              <template slot="subText"
                ><div>Vous serez redirigé sur podia.com</div></template
              >
            </Btn>
          </a>
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || "index").fetch();

    const general = await $content("general").fetch();

    const links = await $content("links").fetch();
    const { menus, networks, footer } = links;

    return {
      doc,
      networks,
      menus,
      general,
      footer,
    };
  },

  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description,
        },
        { name: "og:title", content: this.doc.title },
        { name: "og:type", content: "article" },
        { name: "og:site_name", content: "catherine La Psy" },
        {
          name: "og:description",
          content: this.doc.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
