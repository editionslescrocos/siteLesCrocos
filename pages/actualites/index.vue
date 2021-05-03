<template>
  <Layout
    :general="general"
    :networks="networks"
    :menus="menus"
    :footer="footer"
  >
    <article>
      <div v-if="doc.image" class="relative z-10">
        <nuxt-img
          :src="doc.image"
          format="jpeg"
          fit="cover"
          class="rounded-md shadow-inner border-gray-50 border-2"
          :alt="doc.imageAlt"
          width="900"
          height="300"
          :placeholder="require('@/assets/placeholder.png')"
        ></nuxt-img>
      </div>
      <div
        class="page relative container z-20 md:rounded-lg shadow-xl  pb-24 px-5 md:px-12 content mx-auto w-11/12"
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
    const currentPage = 1;
    const itemsPerPage = 4;

    const allItems = await $content(targetToFetch)
      .sortBy("created_at", "desc")
      .fetch();

    const nbItems = allItems.length;
    const nbPages = Math.round(nbItems / itemsPerPage);

    const startAt = () => {
      return (currentPage - 1) * itemsPerPage;
    };

    const itemsToDisplay = await $content(targetToFetch)
      .sortBy("created_at", "desc")
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

<style lang="scss" scoped></style>
