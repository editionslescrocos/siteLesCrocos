<template>
  <Layout :general="general" :networks="networks" :menus="menus" :footer="footer">
    <article>
      <TopImage :image="doc.image" :imageAlt="doc.imageAlt" />
      <div
        class="page relative container mx-auto z-20 md:rounded-lg shadow-xl bg-gray-50 pb-24 px-5 md:px-12 md:w-10/12 lg:w-10/12 xl:w-8/12 content"
        :class="doc.image && 'md:-mt-16'"
      >
        <TitlePage :doc="doc" />

        <nuxt-content :document="doc"></nuxt-content>

        <list-alternate :items="actus" followSlug></list-alternate>
        <Pagination :pagination="pagination" />
      </div>
    </article>
  </Layout>
</template>

<script>
import ListAlternate from "~/components/ListAlternate.vue";
export default {
  components: { ListAlternate },
  async asyncData({ $content, params }) {
    const doc = await $content("actualite").fetch();

    const general = await $content("general").fetch();

    const links = await $content("links").fetch();
    const { menus, networks, footer } = links;

    const targetToFetch = "actualites";
    const currentPage = parseInt(params.page) || 1;
    const itemsPerPage = 4;

    const allItems = await $content(targetToFetch)
      .sortBy("date", "desc")
      .fetch();

    const nbItems = allItems.length;
    const nbPages = Math.ceil(nbItems / itemsPerPage);

    const startAt = () => {
      return (currentPage - 1) * itemsPerPage;
    };

    const itemsToDisplay = await $content(targetToFetch)
      .sortBy("date", "desc")
      .limit(itemsPerPage)
      .skip(startAt())
      .fetch();

    const nextPage = currentPage < nbPages ? currentPage + 1 : null;
    const previousPage = currentPage - 1 > 0 ? currentPage - 1 : null;

    const pagination = {
      url: "actualites-page",
      currentPage,
      nextPage,
      previousPage,
      nbPages,
      itemsPerPage
    };

    return {
      doc,
      actus: itemsToDisplay,
      pagination,
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

<style lang="scss" scoped>
</style>
