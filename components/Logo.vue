<template>
  <div>
    <img
      :src="require('@/assets/crocos.svg')"
      alt="Logo des éditions des crocos"
      height="200px"
    />
  </div>
</template>

<style scoped>
img {
  height: 140px;

  width: auto;
}

@media screen and (max-width: 768px) {
  img {
    height: 95px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
  img {
    height: 140px;
  }
}
</style>
