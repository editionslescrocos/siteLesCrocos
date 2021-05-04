<template>
  <Layout
    :general="general"
    :networks="networks"
    :menus="menus"
    :footer="footer"
  >
    <article>
      <div v-if="doc.image" class="relative z-10 hidden md:block">
        <nuxt-picture
          :src="doc.image"
          fit="cover"
          class="md:rounded-md shadow-inner border-gray-50 border-2"
          :alt="doc.imageAlt"
          format="webp"
          quality="80"
          width="1200"
          height="500"
          sizes="sm:500px md:800px lg:1000px xl:1200px"
        ></nuxt-picture>
      </div>
      <div
        class="relative container z-20 rounded-lg shadow-xl bg-white pb-24 px-5 md:px-12 mx-auto w-11/12 content"
        :class="doc.image && 'md:-mt-16'"
      >
        <div class="md:flex md:flex-row md:flex-row-reverse">
          <div class="w-full md:w-1/3 pt-4">
            <nuxt-img
              :src="doc.imageProduct"
              :width="imageDimensions.w"
              :height="imageDimensions.h"
              quality="80"
              format="jpeg"
              fit="outside"
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

          <div class=" md:mr-5 w-full md:w-2/3">
            <div class="pt-10">
              <h1 class=" text-2xl mb-3">
                {{ doc.title }}
              </h1>

              <p v-if="doc.subtitle" class="text-2xl">
                {{ doc.subtitle }}
              </p>
            </div>

            <p class="text-left  my-5">
              <nuxt-content :document="doc" />
            </p>

            <BuyBtn class="mt-3" :product="doc"
              ><img
                class="inline mr-2"
                :src="require('@/assets/cart.svg')"
                height="25"
                width="25"
              />Commander {{ doc.priceToDiplay }}</BuyBtn
            >
          </div>
        </div>
        <Back to="/products">Retour au catalogue</Back>
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
      if (this.doc.type !== "livre") return { w: 500, h: 500 };
      return { w: 500, h: 700 };
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
  created() {
    var formatter = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR"

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    this.doc.priceToDiplay = formatter.format(this.doc.price);
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

<style lang="scss" scoped>
h1 {
  font-family: "Alata", sans-serif !important;
}
</style>
