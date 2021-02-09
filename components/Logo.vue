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
  height: 180px;
  margin-top: 40px;
  width: auto;
}

@media screen and (max-width: 768px) {
  img {
    height: 105px;
    margin-top: 10px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
  img {
    margin-top: 70px;
    height: 160px;
  }
}

@media screen and (min-width: 1500px) {
  img {
    height: 230px;
    margin-top: 0px;
  }
}
</style>
