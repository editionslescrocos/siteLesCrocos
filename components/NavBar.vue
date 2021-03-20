<template>
  <div class="top-page container mx-auto mt-3 mb-3">
    <nav class="w-full py-1 mb-70 menu">
      <div class="flex items-top md:items-top mt-5">
        <div class="flex-none">
          <nuxt-link to="/">
            <Logo class="ml-5" />
          </nuxt-link>
        </div>

        <div class="flex-grow">
          <div class="pl-8 menu">
            <div class="mt-8 hidden md:block title-site">
              <div class="flex pb-3 mr-5 border-b-2 border-gray-200">
                <div class="flex-auto">
                  <h1
                    v-if="isHOne"
                    class="text-2xl md:text-4xl title-site text-customGreen"
                  >
                    Maison d'édition jeunesse
                  </h1>

                  <div
                    v-if="!isHOne"
                    class="text-2xl md:text-4xl title-site text-customGreen"
                  >
                    Maison d'édition jeunesse
                  </div>
                </div>

                <div
                  class="hidden md:block text-right social-networks flex-auto"
                >
                  <nav class="space-x-3">
                    <nuxt-link to="/contact" class="inline-block">
                      <img
                        :src="require(`@/assets/contact.svg`)"
                        :alt="`Contact`"
                      />
                    </nuxt-link>
                    <a
                      class="inline-block"
                      v-for="sn in networks"
                      :key="sn.title"
                      :href="sn.href"
                      target="blank"
                    >
                      <img
                        :src="require(`@/assets/${sn.image}`)"
                        :alt="`logo ${sn.title}`"
                      />
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <div
              class="hidden flex-grow md:inline-block order-3 md:order-1 mt-1"
              id="menu"
            >
              <nav class="flex space-x-4">
                <Link
                  v-for="(menu, index) in menus"
                  :key="index"
                  :to="menu.to"
                  class="no-underline text-xl py-2 pr-6 lg:-ml-2 top-link inline-block"
                  >{{ menu.text }}</Link
                >

                <button class="header__checkout snipcart-checkout inline-block">
                  <img
                    class="inline mr-2"
                    :src="require('@/assets/basket.svg')"
                    height="35"
                    width="35"
                    alt="Produits dans votre panier"
                  />
                  (<span class="snipcart-items-count">0</span>)
                </button>
              </nav>
            </div>
            <div class="w-full text-right items-center mr-0 md:mr-4">
              <label for="menu-toggle" class="cursor-pointer md:hidden block">
                <button
                  class="text-black border-2 border-black rounded-md mr-5"
                  aria-label="Open Menu"
                  @click="drawer"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </label>

              <input class="hidden" type="checkbox" id="menu-toggle" />
            </div>
          </div>
        </div>
      </div>
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <aside
        class="transform text-white top-0 left-0 w-64 bg-emerald-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <nav>
          <div
            class="pt-5 pl-5 text-white font-medium text-lg hover:text-red-200"
          >
            <nuxt-link to="/">
              <p class="text-xl title-site">Éditions les Crocos</p>
            </nuxt-link>
          </div>

          <ul class="ml-5">
            <li
              v-for="(menu, index) in menus"
              :key="index"
              class="font-medium text-lg py-2 hover:text-red-200"
              @click="isOpen = false"
            >
              <nuxt-link :to="menu.to">{{ menu.text }}</nuxt-link>
            </li>
          </ul>

          <ul class="ml-5 mt-8 social-networks">
            <li class="mt-3" v-for="sn in networks" :key="sn.title">
              <a :href="sn.href">
                <img
                  :src="require(`@/assets/${sn.image}`)"
                  :alt="`logo ${sn.title}`"
                  class="inline-block"
                />
                {{ sn.title }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </nav>
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
  },

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.top-link,
.title-site {
  font-family: "KGSorry", sans-serif;
}

.social-networks {
  img {
    height: 35px;
    transition: transform 0.15s;
    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>
