<template>
  <div>
    <nuxt-link v-if="to && !href" :to="to">
      <button
        v-if="product"
        @click="clickAction"
        :type="typeButton"
        :disabled="disabled"
        class="w-full"
        :class="[{ 'md:w-auto': !isFull }, btnLayout, 'snipcart-add-item']"
        :data-item-id="product.slug"
        :data-item-name="product.title"
        :data-item-price="product.price"
        :data-item-url="product.path"
        :data-item-image="product.imageProduct"
        :data-item-description="product.description"
        :data-item-taxes="product.taxes"
      >
        <span class="uppercase"> <slot></slot> </span>
        <span class="text-xs"><slot name="subText"></slot></span>
      </button>

      <button
        v-else
        @click="clickAction"
        :type="typeButton"
        :disabled="disabled"
        class="w-full"
        :class="[{ 'md:w-auto': !isFull }, btnLayout]"
      >
        <span class="uppercase"> <slot></slot> </span>
        <span class="text-xs"><slot name="subText"></slot></span>
      </button>
    </nuxt-link>

    <a v-if="href" :href="href" target="blank">
      <button
        @click="clickAction"
        :type="typeButton"
        :disabled="disabled"
        :class="btnLayout"
      >
        <span class="uppercase">
          <slot></slot>
        </span>
        <span class="text-xs"><slot name="subText"></slot></span>
      </button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "emerald-900",
    },
    typeButton: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    isFull: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: null,
    },
  },

  computed: {
    bgColor() {
      if (this.disabled) return "gray-400";
      return this.color;
    },
    btnLayout() {
      return `inline-block pulse px-3 py-2  font-small leading-4 text-center text-white transition bg-${this.bgColor} hover:border-white hover:border-1 rounded shadow ripple hover:shadow-lg focus:outline-none`;
    },
  },
  methods: {
    clickAction() {
      this.$emit("click", "btn-click");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  text-transform: uppercase;
  font-size: 1rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #00771a;

    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
}
</style>
