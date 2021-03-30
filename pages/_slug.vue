<template>
  <Layout :networks="networks" :menus="menus" :footer="footer">
    <article>
      <div v-if="doc.image" class="relative">
        <nuxt-picture
          :src="doc.image"
          format="webp"
          fit="cover"
          class="rounded-t-md md:rounded-md shadow-inner border-gray-50 border-2"
          width="900"
          height="400"
        ></nuxt-picture>
      </div>
      <div
        class="page relative container bg-white shadow-xl md:rounded-lg pb-24 px-5 md:px-12 content mx-auto w-11/12"
        :class="doc.image && 'md:-mt-32'"
      >
        <header>
          <div class="titles">
            <div class="pt-10">
              <h1 class="text-4xl text-customGreen text-center font-bold mb-3">
                {{ doc.title }}
              </h1>

              <p
                v-if="doc.subtitle"
                class="text-2xl mb-5 text-center font-bold"
              >
                {{ doc.subtitle }}
              </p>
            </div>
          </div>
          <p
            v-if="doc.description"
            class="text-left text-lg font-semibold my-7"
          >
            {{ doc.description }}
          </p>
        </header>
        <nuxt-content :document="doc"></nuxt-content>
      </div>
    </article>
  </Layout>
</template>

<script>
import ListAlternate from "~/components/ListAlternate.vue";
export default {
  components: { ListAlternate },
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
