<template lang="pug">
  section.footer
    span.footer__text Разработано в MST | 2018
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
  .footer {
    padding: 23px 0 22px 0;
    
    &__text {
      font-family: Gilroy;
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 0.175729px;
      text-transform: uppercase;
      color: #505050;
    }
  }
</style>