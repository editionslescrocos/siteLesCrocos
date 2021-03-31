<template>
  <div>
    <button
      :type="typeButton"
      :disabled="disabled"
      class="w-full plain"
      :class="[{ 'md:w-auto': !isFull }, btnLayout, 'snipcart-add-item']"
      :data-item-id="product.slug"
      :data-item-name="product.title"
      :data-item-price="product.price"
      :data-item-url="product.path"
      :data-item-image="product.imageProduct"
      :data-item-description="product.description"
      :data-item-taxes="product.taxes"
    >
      <span>
        <slot></slot>
      </span>
      <span class="text-xs"><slot name="subText"></slot></span>
    </button>
  </div>
</template>

<script>
import buttonLayoutMixin from "@/mixins/buttonLayout";
export default {
  mixins: [buttonLayoutMixin],
  props: {
    color: {
      type: String,
      default: "customGreen-dark",
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
};
</script>

