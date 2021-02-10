<template>
  <div>
    <Nuxt />
    <CookieControl locale="fr" />
  </div>
</template>


<style lang="scss">
.container {
  font-family: "Nunito Sans", sans-serif;
}

.sea {
  min-height: 50em;
  background: rgb(11, 181, 255);
  background: linear-gradient(
    180deg,
    rgba(11, 181, 255, 1) 0%,
    rgba(2, 48, 108, 1) 100%
  );
}

.title-site {
  font-family: "Bubblegum Sans", sans-serif;
  /* font-family: "Acme", sans-serif; */
}

.content-site,
.navbar-site {
  z-index: 20;
}

.content-site {
  z-index: 20;
}

.bubbles-component {
  z-index: 1;
}

.page {
  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 0.5em;
  }
}
</style>
