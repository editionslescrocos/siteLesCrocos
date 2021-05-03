module.exports = `
      <payment section="top">
        <div class="cgv">
          <p>
            <snipcart-checkbox name="cgv" required></snipcart-checkbox>
            <snipcart-label for="privacy-policy">J&#39;ai lu et j&#39;accepte les &nbsp;<a href="https://www.editionslescrocos.com/conditions-generales-vente" target="blank">conditions générales de vente</a></snipcart-label>
          </p>
          <p>Vos données personnelles seront utilisées pour le traitement de votre commande, vous accompagner au cours de votre visite du site web, et pour d’autres raisons décrites dans notre &nbsp;<a href="https://www.editionslescrocos.com/mentions-legales" target="blank" >Politique de confidentialité</a></p>
        </div>
      </payment>

      <address-fields section="top">
        <div>
          <snipcart-label for="phone">
            Numéro de téléphone
          </snipcart-label>
          <snipcart-input name="phone"> </snipcart-input>
        </div>
      </address-fields>

`;
