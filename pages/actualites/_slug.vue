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
        class="page relative container z-20 md:rounded-lg shadow-xl bg-white pb-24 px-5 md:px-12 mx-auto w-11/12 content"
        :class="doc.image && 'md:-mt-16'"
      >
        <TitlePage :doc="doc" />
        <nuxt-content :document="doc"></nuxt-content>
        <Back to="/actualites">Retour aux actualités</Back>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("actualites/" + params.slug || "index").fetch();

    const general = await $content("general").fetch();

    const links = await $content("links").fetch();
    const { menus, networks, footer } = links;

    return {
      doc,
      networks,
      menus,
      general,
      footer
    };
  },

  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description
        },
        { name: "og:title", content: this.doc.title },
        { name: "og:type", content: "article" },
        { name: "og:site_name", content: "Editions les crocos" },
        {
          name: "og:description",
          content: this.doc.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
