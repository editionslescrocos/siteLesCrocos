<template>
  <div class="top-page bg-gray-50">
    <div class="waves mt-5">
      <Waves />
    </div>
    <nav class="w-full py-1 mb-70 menu">
      <div class="container mx-auto menu-content">
        <button class="header__checkout snipcart-checkout">
          <img
            class="inline mr-2"
            :src="require('@/assets/basket.svg')"
            height="35"
            width="35"
          />Panier (<span class="snipcart-items-count">0</span>)
        </button>
        <nuxt-link to="/" class="absolute logo ml-5 mt-2">
          <Logo />
        </nuxt-link>

        <div class="w-full hidden md:block absolute text-right social-networks">
          <div class="container">
            <nav class="space-x-4 mt-8 mr-5">
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

        <div class="container absolute menu">
          <div class="text-center mt-8 hidden md:block">
            <h1
              v-if="isHOne"
              class="text-2xl md:text-4xl title-site text-emerald-800"
            >
              <span class="uppercase font-bold">Éditions</span>
              les
              <span class="uppercase font-bold">Crocos</span>
            </h1>

            <div
              v-else
              class="text-2xl md:text-4xl title-site text-emerald-800"
            >
              <span class="uppercase font-bold">Éditions</span>
              les
              <span class="uppercase font-bold">Crocos</span>
            </div>
          </div>

          <div
            class="hidden w-full md:inline-block order-3 md:order-1 mt-1"
            id="menu"
          >
            <nav>
              <ul class="text-base pt-4 text-center">
                <li
                  v-for="(menu, index) in menus"
                  :key="index"
                  class="inline-block mx-2"
                >
                  <Link
                    :to="menu.to"
                    class="text-emerald-800 no-underline font-medium font-extrabold text-xl py-2 px-4 lg:-ml-2 top-link"
                    >{{ menu.text }}</Link
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div
            class="absolute w-full text-right items-center mr-0 md:mr-4 mt-7"
          >
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
          <div class="p-5 text-white font-medium text-lg hover:text-red-200">
            <nuxt-link to="/">
              <p class="text-xl title-site">
                <span class="uppercase font-bold">Éditions</span>
                les
                <span class="uppercase">Crocos</span>
              </p>
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
.top-page {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;

  // background: radial-gradient(
  //   ellipse at center,
  //   rgba(255, 254, 234, 1) 0%,
  //   rgba(255, 254, 234, 1) 35%,
  //   #e2d69d 100%
  // );
}

.menu-content {
  min-height: 240px;
  z-index: 4;
}

@media screen and (min-width: 200px) and (max-width: 750px) {
  .menu-content {
    min-height: 120px;
  }
}

@media screen and (min-width: 1600px) {
  .menu-content {
    min-height: 250px;
  }
}

.menu,
.logo {
  z-index: 4;
}

.to-front {
  z-index: 4;
}

.waves {
  width: 100%;
  z-index: 3;
  position: absolute;
}

.top-link {
  font-family: "Noto Sans JP", sans-serif;
}

.title-site {
  font-family: "Acme", sans-serif;
}

.social-networks {
  z-index: 99;
  img {
    height: 35px;
    transition: transform 0.15s;
    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>
