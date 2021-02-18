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
        class="relative container mx-auto z-20 md:rounded-lg shadow-xl bg-gray-50 pb-24 px-5 md:px-12 md:w-11/12 lg:w-11/12 xl:w-11/12 content"
        :class="doc.image && 'md:-mt-32'"
      >
        <header>
          <div class="titles">
            <div class="pt-10">
              <h1 class="text-4xl text-center font-bold mb-3">
                {{ doc.title }}
              </h1>

              <p v-if="doc.subtitle" class="text-2xl text-center font-bold">
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

        <div v-if="books.length">
          <h2 class="text-3xl font-bold mb-4">Nos livres</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="book in books" :key="book.path">
              <ProductItem :product="book"></ProductItem>
            </div>
          </div>
        </div>

        <div v-if="otherProducts.length" class="mt-24">
          <h2 class="text-3xl font-bold mb-4">Autres produits</h2>
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
      footer,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
