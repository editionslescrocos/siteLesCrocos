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
        class="page relative container z-11 md:rounded-lg shadow-xl bg-white pb-24 px-5 content mx-auto w-11/12"
        :class="doc.image && 'md:-mt-16'"
      >
        <TitlePage :doc="doc" />

        <div v-if="books.length">
          <h2 class="text-3xl  mb-4">Nos livres</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="book in books" :key="book.path">
              <ProductItem :product="book"></ProductItem>
            </div>
          </div>
        </div>

        <div v-if="otherProducts.length" class="mt-24">
          <h2 class="text-3xl  mb-4">Autres produits</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="product in otherProducts" :key="product.path">
              <ProductItem :product="product"></ProductItem>
            </div>
          </div>
        </div>

        <div v-if="packs.length" class="mt-24">
          <h2 class="text-3xl  mb-4">Nos packs</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="product in packs" :key="product.path">
              <ProductItem :product="product"></ProductItem>
            </div>
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`product` || "index").fetch();

    const books = await $content("products" || "index")
      .where({ type: "livre" })
      .sortBy("order", "desc")
      .fetch();
    const otherProducts = await $content("products" || "index")
      .where({ type: "autre" })
      .sortBy("order", "desc")
      .fetch();
    const packs = await $content("products" || "index")
      .where({ type: "pack" })
      .sortBy("order", "desc")
      .fetch();

    const general = await $content("general").fetch();
    const links = await $content("links").fetch();
    const { menus, networks, footer } = links;

    return {
      doc,
      books,
      otherProducts,
      packs,
      networks,
      menus,
      general,
      footer
    };
  }
};
</script>

<style lang="scss" scoped></style>
