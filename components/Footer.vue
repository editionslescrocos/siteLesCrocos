<template>
  <div class="ground">
    <img
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

      <div class="container mx-auto text-center">
        <div class="py-20">
          <p>
            © 2021
            <a
              href="https://developpeurfullstack.fr"
              class="hover:text-red-500 underline"
              >Fabien Grignoux</a
            >
            - Tous droits réservés
          </p>

          <p class="mt-3">
            <nuxt-link to="/mentions-legales" class="underline"
              >Mentions légales</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ground {
  img.ground-background {
    height: 100px;
    width: 100%;
  }
  background-color: #083065;
}

.sol {
  position: relative;
}

.img-sol {
  position: absolute;
}

.etoile-1 {
  margin-left: 10%;
  transform: rotate(35deg);
}

.etoile-2 {
  margin-left: 80%;
  margin-top: 10%;
  transform: rotate(155deg);
}

.etoile-3 {
  margin-left: 30%;
  margin-top: 8%;
  transform: rotate(220deg);
}

.shell-1 {
  margin-left: 85%;
  margin-top: 3%;
  transform: rotate(155deg);
}

.shell-2 {
  margin-left: 20%;
  margin-top: 2%;
}
</style>
