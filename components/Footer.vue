<template>
  <div class="ground text-white">
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
