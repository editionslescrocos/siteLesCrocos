<template>
  <nav class="w-full py-1 mb-70 menu">
    <div class="waves">
      <Waves />
    </div>
    <div class="container mx-auto flex justify-between menu-content">
      <div class="items-center px-5 py-2 mt-0">
        <nuxt-link to="/">
          <Logo class="logo" />
        </nuxt-link>
      </div>

      <div class="flex items-center justify-end mr-0 md:mr-4">
        <div
          class="hidden md:block md:flex md:justify-between md:bg-transparent"
        >
          <div
            class="flex hidden md:flex md:items-center order-3 md:order-1 -mt-16"
            id="menu"
          >
            <nav>
              <ul
                class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0"
              >
                <li v-for="(link, index) in links" :key="index" class="mx-2">
                  <nuxt-link
                    :to="link.to"
                    class="inline-block no-underline font-medium font-bold text-2xl py-2 px-4 lg:-ml-2"
                    >{{ link.text }}</nuxt-link
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="items-center mr-0 md:mr-4">
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
        <nuxt-link to="/"> </nuxt-link>
      </div>

      <ul class="ml-5 mt-12">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="font-medium text-lg py-2 hover:text-red-200"
          @click="isOpen = false"
        >
          <nuxt-link :to="link.to">{{ link.text }}</nuxt-link>
        </li>
      </ul>

      <div class="fixed bottom-0 w-full"></div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
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
.menu {
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
  z-index: 1;
}

.waves {
  width: 100%;
  position: absolute;
  bottom: 0;
}

a {
  color: rgb(23, 112, 38);
  //background: -webkit-linear-gradient(rgb(117, 115, 1), rgb(15, 95, 1));
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  //font-family: "Rum Raisin", sans-serif;

  font-family: "Acme", sans-serif;
  // font-family: "Happy Monkey", sans-serif;

  // font-family: "Boogaloo", sans-serif;
  //font-family: "Bubblegum Sans", sans-serif;
}
</style>
