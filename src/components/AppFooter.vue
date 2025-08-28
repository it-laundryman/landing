<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__contact">
        <a class="footer__link footer__link--phone" href="tel:+6281245555555" target="_blank"
          rel="noopener noreferrer">+62 81 245 555 555</a>
        <a class="footer__link footer__link--email" href="mailto:hello@labna.capital" target="_blank"
          rel="noopener noreferrer">hello@labna.capital</a>
        <p class="footer__address">Jl. Tirta Ening No.8, Sanur Kauh, Denpasar Selatan, Kota Denpasar, Bali, Indonesia
        </p>
      </div>

      <div class="footer__logo">
        <img class="footer__logo-image" src="@/assets/images/logoFooter.svg" alt="Логотип Labna Capital">
      </div>

      <div class="footer__slogan">
        <span class="footer__slogan-title">LABNA CAPITAL</span>
        <span class="footer__slogan-text">Based on values.</span>
        <span class="footer__slogan-text">Focus on growth.</span>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__policies">
        <a class="footer__policy-link" href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a class="footer__policy-link" href="#" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
      </div>

      <div class="footer__social">
        <a class="footer__social-link" href="#" target="_blank" rel="noopener noreferrer"><img
            src="@/assets/images/instagram.svg" alt="instagram"></a>
        <a class="footer__social-link" href="#" target="_blank" rel="noopener noreferrer"><img
            src="@/assets/images/telegram.svg" alt="telegram"></a>
        <a class="footer__social-link" href="#" target="_blank" rel="noopener noreferrer"><img
            src="@/assets/images/whatsapp.svg" alt="whatsapp"></a>
        <a class="footer__social-link" href="#" target="_blank" rel="noopener noreferrer"><img
            src="@/assets/images/facebook.svg" alt="facebook"></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  position: relative;
  z-index: 1;
  display: grid;
  padding: vw(60) vw(43) vw(43) vw(43);
  background-color: $brown;
  border-radius: vw(15) vw(15) 0 0;
  overflow: hidden;

  &__top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: vw(25);
    max-width: vw(305);
  }

  &__link {
    text-decoration: none;
  }

  &__link--phone {
    font-family: 'Agatho';
    font-weight: 700;
    font-size: vw(30);
    line-height: 100%;
    letter-spacing: 0px;
    color: $yellow-light;
  }

  &__link--email {
    font-family: 'Wix Madefor Display';
    font-weight: 400;
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__address {
    font-family: 'Wix Madefor Display';
    font-weight: 400;
    font-size: vw(14);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: vw(145);
    max-height: vw(160);
    justify-self: center;
  }

  &__logo-image {
    width: 100%;
    object-fit: contain;
  }

  &__slogan {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
  }

  &__slogan-title {
    font-family: 'Agatho';
    font-weight: 500;
    font-size: vw(20);
    line-height: 100%;
    letter-spacing: 0px;
    color: $yellow-light;
    margin-bottom: vw(25);
  }

  &__slogan-text {
    font-family: 'Wix Madefor Display';
    font-weight: 400;
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__bottom {
    margin-top: vw(80);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  &__policies {
    display: flex;
    gap: vw(40);
  }

  &__policy-link {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(18);
    line-height: 100%;
    letter-spacing: 0%;
    text-decoration: underline;
    text-decoration-style: solid;
    text-underline-offset: vw(3);
    color: $yellow-light;
  }

  &__social {
    justify-self: flex-end;
    display: flex;
    gap: vw(15);
  }

  &__social-link {
    width: vw(25);
    aspect-ratio: 1;
  }
}
</style>