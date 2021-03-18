<template>
  <div>
    <NavBar
      class="navbar-site"
      :menus="menus"
      :networks="networks"
      :footer="footer"
      :isHOne="isHOne"
    />

    <div class="content-site">
      <section>
        <div class="container mx-auto text-gray-800">
          <slot></slot>
        </div>
      </section>
    </div>
    <Footer :footer="footer" />
  </div>
</template>

<script>
export default {
  props: {
    isHOne: {
      type: Boolean,
      default: false,
    },
    networks: {
      type: Array,
      default: [],
    },
    menus: {
      type: Array,
      default: [],
    },
    footer: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
