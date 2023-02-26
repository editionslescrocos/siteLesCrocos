<template>
  <div>
    <div v-for="year in years" :key="year">
      <h2 class="mt-8">{{ year }}</h2>
      <div class="mb-8 md:mb-2 md:grid md:grid-cols-2 md:gap-6">
        <template v-for="article in articles">
          <div v-if="article.date.includes(year)">
            <template>
              <nuxt-img
                :src="imagePath(article.image)"
                format="jpeg"
                width="450"
                height="300"
              >
              </nuxt-img>
              <h3>{{ article.title }}</h3>
              <p>{{ article.dateForHuman }}</p>
              <p v-if="article.description">{{ article.description }}</p>
              <p>
                <a v-if="article.url" :href="article.url" target="blank">
                  <Btn>Voir</Btn>
                </a>

                <a
                  v-if="article.document"
                  :href="`${article.document}`"
                  target="blank"
                >
                  <Btn>Voir</Btn>
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
import imagePathTransformer from "@/mixins/imagePathTransformer";

const { DateTime } = require("luxon");

export default {
  mixins: [imagePathTransformer],
  computed: {
    years() {
      const years = [];
      this.articles.forEach((article) => {
        const articleDate = new Date(article.date);
        years.push(articleDate.getUTCFullYear());
      });
      return new Set(years);
    },
  },

  data() {
    return {
      articles: [],
      index: null,
    };
  },
  async fetch() {
    const articles = await this.$content("press")
      .sortBy("date", "desc")
      .fetch();

    articles.map((article) => {
      let dt = DateTime.fromISO(article.date);
      const numMonth = dt.setLocale("fr").toLocaleString({ month: "numeric" });
      const month = getMonthInFrench(numMonth);
      const year = dt.setLocale("fr").toLocaleString({ year: "numeric" });
      article.dateForHuman = `${month} ${year}`;
    });

    this.articles = articles;
  },
};

function getMonthInFrench(nbMonth) {
  return [
    "janvier",
    "févrer",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ][nbMonth++];
}
</script>

<style lang="scss" scoped></style>
