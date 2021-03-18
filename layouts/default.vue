<template>
  <div>
    <Nuxt />
    <CookieControl locale="fr" />
  </div>
</template>


<style lang="scss">
.container {
  font-family: "Alata", sans-serif;
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

h1,
h2,
h3 {
  font-family: "KGSorry" !important;
}

// .page {
//   h1,
//   h2,
//   h3 {
//     background: linear-gradient(to right, #065f46, #0daa22 70%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   h2 {
//     font-size: 1.5em;
//     margin-bottom: 0.5em;
//     padding-top: 0.5em;
//     font-weight: bold;
//   }

//   h3 {
//     font-size: 1.3em;
//     margin-bottom: 0.5em;
//     padding-top: 0.5em;
//     font-weight: bold;
//   }

//   .titles {
//     position: relative;
//     text-align: center;
//     padding-bottom: 0.5em;
//   }

//   .titles:after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     width: 3em; /* or 100px */
//     margin-left: -1.5em;
//     height: 0.5em;
//     margin-top: 1em;
//     border-radius: 1em;
//     background: linear-gradient(to right, #065f46, #0daa22 50%);
//   }
// }

p {
  margin-bottom: 1em;
}
</style>
