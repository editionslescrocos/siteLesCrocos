<template>
  <div>
    <NavBar
      class="navbar-site"
      :menus="menus"
      :general="general"
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
      default: false
    },
    networks: {
      type: Array,
      default: []
    },
    menus: {
      type: Array,
      default: []
    },
    general: {
      types: Object,
      default: null
    },
    footer: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped></style>
