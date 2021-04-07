<template>
  <Layout :networks="networks" :menus="menus" :footer="footer">
    <article>
      <div v-if="doc.image" class="relative z-10 hidden md:block">
        <nuxt-picture
          :src="doc.image"
          format="jpeg"
          fit="cover"
          class="md:rounded-md shadow-inner border-gray-50 border-2"
          :alt="doc.imageAlt"
          width="900"
          height="400"
        ></nuxt-picture>
      </div>
      <div
        class="relative container z-20 rounded-lg shadow-xl bg-white pb-24 px-5 md:px-12 mx-auto w-11/12 content"
        :class="doc.image && 'md:-mt-32'"
      >
        <div class="md:flex md:flex-row md:flex-row-reverse">
          <div class="w-full md:w-1/3 pt-4">
            <nuxt-picture
              :src="doc.imageProduct"
              :width="imageDimensions.w"
              :height="imageDimensions.h"
              format="jpeg"
            />

            <Btn
              v-if="doc.images.length"
              isFull
              isNotRounded
              @click="index = 0"
            >
              <template v-if="doc.type === 'livre'"
                ><img
                  class="inline mr-2"
                  :src="require('@/assets/book.svg')"
                  height="25"
                  width="25"
                />Feuilleter</template
              >

              <template v-else>Plus d'images</template></Btn
            >
          </div>

          <div class="titles w-full md:w-2/3">
            <div class="pt-10">
              <h1 class="text-customGreen text-4xl mb-3">
                {{ doc.title }}
              </h1>

              <p v-if="doc.subtitle" class="text-2xl">
                {{ doc.subtitle }}
              </p>
            </div>

            <p
              v-if="doc.description"
              class="text-left text-lg font-semibold my-7"
            >
              {{ doc.description }}
            </p>

            <p v-if="doc.books_reserved.auteur">
              <span class="font-semibold mr-8">Auteur(s)</span>
              {{ doc.books_reserved.auteur }}
            </p>
            <p v-if="doc.books_reserved.pages">
              <span class="font-semibold mr-8">Nombre de pages</span>
              {{ doc.books_reserved.pages }}
            </p>
            <p v-if="doc.books_reserved.isbn">
              <span class="font-semibold mr-8">ISBN</span>
              {{ doc.books_reserved.isbn }}
            </p>

            <BuyBtn class="mt-3" :product="doc"
              ><img
                class="inline mr-2"
                :src="require('@/assets/basket-in.svg')"
                height="25"
                width="25"
              />Commander {{ doc.price }}€</BuyBtn
            >
          </div>
        </div>

        <nuxt-content class="mt-6" :document="doc"></nuxt-content>
        <CoolLightBox
          :items="doc.images"
          :index="index"
          @close="index = null"
          closeOnClickOutsideMobile
        >
        </CoolLightBox>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("products/" + params.slug || "index").fetch();
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
  data() {
    return {
      index: null
    };
  },
  computed: {
    imageDimensions() {
      if (this.doc.type !== "livre") return { w: 400, h: 400 };
      return { w: 400, h: 600 };
    }
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
  },
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Book",
      description: this.doc.description,
      genre: "childbook",
      inLanguage: this.doc.lang || "fr_FR",
      isFamilyFriendly: "true",
      isbn: this.doc.isbn,
      name: this.doc.title,
      author: this.doc.author,
      image: this.doc.imageProduct,
      numberOfPages: this.doc.pages,
      publisher: {
        "@type": "Organization",
        name: "Editions les Crocos"
      },
      url: this.doc.path
    };
  }
};
</script>

<style lang="scss" scoped></style>
