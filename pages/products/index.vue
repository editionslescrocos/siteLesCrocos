<template>
  <Layout :networks="networks" :menus="menus" :footer="footer">
    <article>
      <div v-if="doc.image" class="relative z-2">
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
        class="page relative container z-11 md:rounded-lg shadow-xl bg-white pb-24 px-5 content mx-auto w-11/12"
        :class="doc.image && 'md:-mt-32'"
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
          <div class="grid grid-cols-3 gap-8">
            <div v-for="product in otherProducts" :key="product.path">
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

    const books = await $content("products/books" || "index")
      .sortBy("order", "asc")
      .fetch();
    const otherProducts = await $content("products/others" || "index")
      .sortBy("order", "asc")
      .fetch();

    const general = await $content("general").fetch();

    const links = await $content("links").fetch();
    const { menus, networks, footer } = links;

    return {
      doc,
      books,
      otherProducts,
      networks,
      menus,
      general,
      footer
    };
  }
};
</script>

<style lang="scss" scoped></style>
