<template>
  <div class="ground text-white">
    <!-- <img
      class="ground-background"
      :src="require('@/assets/ground.svg')"
      alt=""
    />
    <div class="bg-yellow-900 text-yellow-100 sol">
      <img
        :src="require('@/assets/etoilemer.svg')"
        alt=""
        height="25px"
        width="25px"
        class="img-sol etoile-1"
      />
      <img
        :src="require('@/assets/etoilemer.svg')"
        alt=""
        height="40px"
        width="40px"
        class="img-sol etoile-2"
      />
      <img
        :src="require('@/assets/etoilemer.svg')"
        alt=""
        height="55px"
        width="55px"
        class="img-sol etoile-3"
      />
      <img
        :src="require('@/assets/shell.webp')"
        alt=""
        height="35px"
        width="35px"
        class="img-sol shell-1"
      />
      <img
        :src="require('@/assets/shell.webp')"
        alt=""
        height="50px"
        width="50px"
        class="img-sol shell-2"
      />
      <img
        :src="require('@/assets/shell.webp')"
        alt=""
        height="40px"
        width="40px"
        class="img-sol shell-3"
      /> -->

      <div class="container mx-auto text-center">
        <div class="py-20">
          <ul class="mt-3 ">
            <li class='md:inline mx-6 my-5 md:my-0' v-for="link in footer"><nuxt-link :to="link.to"
              >{{ link.title }}</nuxt-link
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
// .ground {
//   img.ground-background {
//     height: 100px;
//     width: 100%;
//   }
//   background-color: #083065;
// }

// .sol {
//   position: relative;
// }

// .img-sol {
//   position: absolute;
// }

// .etoile-1 {
//   bottom: 20%;
//   left: 15%;
//   transform: rotate(35deg);
// }

// .etoile-2 {
//   top: 10%;
//   left: 5%;
//   transform: rotate(155deg);
// }

// .etoile-3 {
//   right: 15%;
//   bottom: 8%;
//   transform: rotate(220deg);
// }

// .shell-1 {
//   right: 10%;
//   top: 3%;
//   transform: rotate(155deg);
// }

// .shell-2 {
//   left: 15%;
//   top: 25%;
// }

// .shell-3 {
//   right: 17%;
//   top: 40%;
//   transform: rotate(-155deg);
// }
</style>
