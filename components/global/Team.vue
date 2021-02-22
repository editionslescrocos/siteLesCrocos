<template>
  <div>
    <list-alternate :items="team" portrait onlyHref></list-alternate>
  </div>
</template>

<script>
export default {
  props: {
    display: {
      type: String,
      default: false,
    },
  },
  data() {
    return {
      team: [],
    };
  },
  async fetch() {
    const isFounder = this.display === "founder" ? true : false;
    const team = await this.$content("team")
      .where({ isFounder })
      .sortBy("order", "asc")
      .fetch();
    this.team = team;
  },
};
</script>

<style lang="scss" scoped>
</style>
