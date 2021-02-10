<template>
  <div>
    <NavBar
      class="navbar-site"
      :menus="menus"
      :networks="networks"
      :footer="footer"
      :isHOne="isHOne"
    />
    <div class="sea">
      <div class="content-site">
        <section>
          <div class="container mx-auto">
            <slot></slot>
          </div>
        </section>
      </div>
      <Footer :footer="footer" />
      <Bubbles class="bubbles-component" />
    </div>
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
