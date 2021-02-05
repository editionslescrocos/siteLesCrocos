<template>
  <div class="link-animated">
    <nuxt-link :to="to" class="hover hover-3">
      <slot></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped>
$animate: all 0.05s ease-in-out;
* {
  box-sizing: border-box;
}
.link-animated {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .hover {
    text-align: center;
    margin: 0 auto;
    padding: 0;
    transition: $animate;
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      width: 0px;
      height: 5px;
      margin: 5px 0 0;
      transition: $animate;
      transition-duration: 0.75s;
      opacity: 0;
      background-color: darken(rgb(18, 177, 79), 5%);
    }
    &.hover-1 {
      &:before,
      &:after {
        left: 0;
      }
    }
    &.hover-2 {
      &:before,
      &:after {
        right: 0;
      }
    }
    &.hover-3 {
      &:before {
        left: 50%;
      }
      &:after {
        right: 50%;
      }
    }
    &.hover-4 {
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
    }
  }
  &:hover {
    cursor: pointer;
    .hover {
      &:before,
      &:after {
        width: 100%;
        opacity: 1;
      }
      &.hover-3,
      &.hover-4 {
        &:before,
        &:after {
          width: 50%;
        }
      }
    }
  }
}
</style>
