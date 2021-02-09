<template>
  <div>
    <NavBar class="navbar-site" :menus="menus" :networks="networks" />
    <div class="sea">
      <div class="content-site">
        <section>
          <div class="container mx-auto">
            <slot></slot>
          </div>
        </section>
      </div>
    </div>

    <Footer :menus="menus" :networks="networks" />
    <Bubbles class="bubbles-component" />
    <CookieControl locale="fr" />
  </div>
</template>

<script>
export default {
  props: {
    networks: {
      type: Array,
      default: [],
    },
    menus: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
