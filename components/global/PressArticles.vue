<template>
  <div>
    <div v-for="year in years" :key="year">
      <h2 class="mt-8">{{ year }}</h2>
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <template v-for="article in articles">
          <div v-if="article.date.includes(year)">
            <template>
              <nuxt-img
                :src="article.image"
                format="jpeg"
                width="450"
                height="300"
              >
              </nuxt-img>
              <h3>{{ article.title }}</h3>
              <p class="font-semibold text-lg">{{ article.dateForHuman }}</p>
              <p>
                <a v-if="article.url" :href="article.url" target="blank">
                  <Btn>En savoir plus</Btn>
                </a>

                <a
                  v-if="article.document"
                  :href="`images/${article.document}`"
                  target="blank"
                >
                  <Btn>En savoir plus</Btn>
                </a>
              </p>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    years() {
      const years = [];
      this.articles.forEach(article => {
        const articleDate = new Date(article.date);
        years.push(articleDate.getUTCFullYear());
      });
      return new Set(years);
    }
  },

  data() {
    return {
      articles: []
    };
  },
  async fetch() {
    const articles = await this.$content("press")
      .sortBy("date", "desc")
      .fetch();

    articles.map(article => {
      const articleDate = new Date(article.date);
      const options = { month: "long", year: "numeric" };
      article.dateForHuman = articleDate.toLocaleDateString("fr-FR", options);
    });

    this.articles = articles;
  }
};
</script>

<style lang="scss" scoped></style>
