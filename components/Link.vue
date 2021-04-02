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
      default: "#"
    }
  }
};
</script>

<style lang="scss" scoped>
$animate: all 0.1s ease-in-out;
* {
  box-sizing: border-box;
}

.nuxt-link-exact-active {
  //border-bottom: 5px solid rgb(18, 177, 79);

  background: transparent;
  border-radius: 1em;
  height: 0.35em;
  bottom: 11px;
  box-shadow: 0 28px 0 0 #3ba23f;
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
      bottom: -6px;
      width: 0px;
      height: 0.35em;
      margin: 5px 0 0;
      transition: $animate;
      transition-duration: 0.5s;
      opacity: 0;

      background-color: #3ba23f;
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
        border-top-right-radius: 4em;
        border-bottom-right-radius: 4em;

        left: 50%;
      }
      &:after {
        border-top-left-radius: 4em;
        border-bottom-left-radius: 4em;
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
