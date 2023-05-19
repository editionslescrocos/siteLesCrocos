<template>
  <Layout
    :general="general"
    :networks="networks"
    :menus="menus"
    :footer="footer"
  >
    <article>
      <TopImage :image="doc.image" :imageAlt="doc.imageAlt" />
      <div
        class="page relative container bg-white shadow-xl md:rounded-lg pb-24 px-5 md:px-12 content mx-auto w-11/12"
        :class="doc.image && 'md:-mt-16'"
      >
        <TitlePage :doc="doc" />

        <nuxt-content :document="doc"></nuxt-content>

        <nuxt-content :document="doc.code"></nuxt-content>
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
        { name: "og:site_name", content: "Editions les crocos" },
        {
          name: "og:description",
          content: this.doc.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
