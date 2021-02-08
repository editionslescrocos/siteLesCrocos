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
  height: 100%;
  width: 120px;
  margin-top: 10px;
}

@media screen and (max-width: 640px) {
  img {
    height: 120px;
    width: 80px;
  }
}

@media screen and (min-width: 641px) and (max-width: 768px) {
  img {
    height: 120px;
    width: 80px;
  }
}

@media screen and (min-width: 1535px) {
  img {
    width: 160px;
  }
}
</style>
