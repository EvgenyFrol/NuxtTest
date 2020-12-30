<template lang="pug">
  section.footer
    span.footer__text Разработано в MST
    span.footer__text |
    span.footer__text 2018
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
  .footer {
    padding: 20px 0;
    flex-grow: 0;
    position: absolute;
    bottom: 0;

    &__text {
      font: 300 13px/15px "Gilroy", normal;
      letter-spacing: 0.178px;
      text-transform: uppercase;
      color: #505050;
      padding-right: 30px;
    }

    @media (max-width: 768px) {
      padding: 30px 0;
    }
  }
</style>
