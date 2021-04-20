<template>
  <div>
    <Nuxt />
    <CookieControl locale="fr" />
    <div
      hidden
      id="snipcart"
      data-api-key="NGRjZGU0MTYtNzg5YS00Y2I2LWJiMjEtYTM1ODhhMDQyZjExNjM3NTAyOTQxNzQ2NTE0NjYw"
    >
      <address-fields section="top">
        <div>
          <snipcart-label for="phone">
            Numéro de téléphone
          </snipcart-label>
          <snipcart-input name="phone"> </snipcart-input>
        </div>
      </address-fields>
    </div>
  </div>
</template>

<style lang="scss"></style>
