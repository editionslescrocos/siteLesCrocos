<template>
  <div class="top-page">
    <Clouds />
    <div class="waves mt-5">
      <Waves />
    </div>
    <nav class="w-full py-1 mb-70 menu">
      <div class="container mx-auto menu-content">
        <nuxt-link to="/" class="absolute logo ml-5 mt-2 md:mt-10">
          <Logo />
        </nuxt-link>

        <div class="w-full hidden md:block absolute text-right">
          <div class="container">
            <nav class="space-x-4 mt-5 mr-5">
              <a
                class="inline-block"
                v-for="sn in networks"
                :key="sn.title"
                :href="sn.href"
              >
                <img
                  :src="require(`@/assets/${sn.image}`)"
                  :alt="`logo ${sn.title}`"
                  class="sn-image"
                />
              </a>
            </nav>
          </div>
        </div>

        <div class="w-full absolute menu">
          <div class="text-center mt-5 hidden md:block">
            <h1 class="text-2xl md:text-5xl italic title-site">
              <span class="uppercase font-bold">Éditions</span>
              les
              <span class="uppercase">Crocos</span>
            </h1>
          </div>

          <div
            class="hidden w-full md:inline-block order-3 md:order-1 mt-5"
            id="menu"
          >
            <nav>
              <ul class="text-base pt-4 md:pt-0 text-center">
                <li
                  v-for="(link, index) in links"
                  :key="index"
                  class="inline-block mx-2"
                >
                  <nuxt-link
                    :to="link.to"
                    class="text-emerald-700 no-underline font-medium font-bold text-2xl py-2 px-4 lg:-ml-2"
                    >{{ link.text }}</nuxt-link
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
        <div class="p-5 text-white font-medium text-lg hover:text-red-200">
          <nuxt-link to="/">
            <p class="text-xl italic title-site">
              <span class="uppercase font-bold">Éditions</span>
              les
              <span class="uppercase">Crocos</span>
            </p>
          </nuxt-link>
        </div>

        <ul class="ml-5">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="font-medium text-lg py-2 hover:text-red-200"
            @click="isOpen = false"
          >
            <nuxt-link :to="link.to">{{ link.text }}</nuxt-link>
          </li>
        </ul>

        <ul class="ml-5 mt-8">
          <li class="mt-3" v-for="sn in networks" :key="sn.title">
            <a :href="sn.href">
              <img
                :src="require(`@/assets/${sn.image}`)"
                :alt="`logo ${sn.title}`"
                class="sn-image inline-block"
              />
              {{ sn.title }}
            </a>
          </li>
        </ul>

        <div class="fixed bottom-0 w-full"></div>
      </aside>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      networks: [
        {
          title: "Instagram",
          image: "instagram.svg",
          href: "",
        },
        {
          title: "Facebook",
          image: "facebook.svg",
          href: "",
        },
      ],
      links: [
        {
          text: "Nos livres",
          to: "/livres",
        },
        {
          text: "Actualité",
          to: "/acutalite",
        },
        {
          text: "Qui sommes nous ?",
          to: "/qui-sommes-nous",
        },
        {
          text: "Nous trouver",
          to: "/nous-trouver",
        },
        {
          text: "Contact",
          to: "/contact",
        },
      ],
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

  background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    #e9e0b1 100%
  );
}

.menu-content {
  min-height: 200px;
  z-index: 4;
}

@media screen and (min-width: 200px) and (max-width: 640px) {
  .menu-content {
    min-height: 120px;
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

a {
  //background: -webkit-linear-gradient(rgb(117, 115, 1), rgb(15, 95, 1));
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  //font-family: "Rum Raisin", sans-serif;

  font-family: "Acme", sans-serif;
  // font-family: "Happy Monkey", sans-serif;

  // font-family: "Boogaloo", sans-serif;
  //font-family: "Bubblegum Sans", sans-serif;
}

.title-site {
  font-family: "Acme", sans-serif;
}

.sn-image {
  height: 35px;
}
</style>
