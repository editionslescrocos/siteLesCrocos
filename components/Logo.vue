<template>
  <div>
    <img
      :src="require('@/assets/logo.webp')"
      alt="Logo des éditions des crocos"
      height="200px"
    />
  </div>
</template>

<style scoped>
img {
  max-height: 200px;
}

@media screen and (min-width: 200px) and (max-width: 640px) {
  img {
    max-height: 120px;
  }
}
</style>
