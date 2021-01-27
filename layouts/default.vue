<template>
  <div>
    <NavBar />
    <div class="sea">
      <section>
        <div class="container mx-auto">
          <Nuxt />
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<style>
.sea {
  min-height: 50em;
  background: rgb(11, 181, 255);
  background: linear-gradient(
    180deg,
    rgba(11, 181, 255, 1) 0%,
    rgba(2, 48, 108, 1) 100%
  );
}
</style>
