<template>
  <div>
    <h1 class="mx-5 text-white text-3xl md:text-7xl title-site text-center">
      Editions les Crocos
    </h1>
    <section>
      <Slider :items="carousel" class="pt-7 pb-14 slider-home"></Slider>
    </section>

    <section>
      <div
        class="rounded-lg bg-gradient-to-b from-gray-100 to-gray-300 p-5 mx-5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna
        sem, ornare eget lacus sed, pellentesque gravida nunc. Vestibulum ligula
        nunc, egestas quis volutpat at, tincidunt sed sem. Proin at tellus sem.
        Praesent rhoncus congue libero, ut volutpat tortor placerat ac. Cras
        lacus ipsum, hendrerit eu quam sodales, dictum egestas risus. Donec nec
        orci sed diam ultricies malesuada. Vestibulum ornare quam diam, ac
        suscipit odio efficitur sed. Nulla ut dignissim ligula, quis maximus
        justo. Mauris rhoncus a enim quis efficitur. Curabitur at ligula diam.
        Ut semper eros et varius tempor. In ac condimentum nibh. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Vestibulum et luctus
        diam. Cras eleifend condimentum congue. Maecenas aliquam suscipit est,
        eu mollis sapien sodales sed. Integer vestibulum tortor lectus, in
        consequat urna porta ullamcorper. Cras nec arcu ac sapien posuere
        tristique in ac nulla. Cras porta augue vel odio suscipit, nec lacinia
        risus ornare. Donec feugiat tempus leo. Phasellus dictum at augue ut
        pellentesque. In molestie finibus pretium. Nam tincidunt dui diam, vitae
        sollicitudin sem pretium a. Quisque sit amet sapien facilisis, varius
        libero sit amet, condimentum sapien. Phasellus ullamcorper erat ipsum,
        ac pretium massa lobortis a. Morbi vestibulum nec eros mollis
        consectetur. Nunc blandit at dolor fermentum dignissim.
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const carousel = await $content("carousel").sortBy("order", "asc").fetch();

    return {
      carousel,
    };
  },
};
</script>

<style scoped>
.slider-home {
  z-index: 2;
}
</style>
