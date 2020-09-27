<template lang="pug">
  .card
    .card__item(v-for="item of returnMenu" :key="item.id" v-)
      .card__center
        .card__desc
          h1.card__title {{item.title}}
          |
          p.card__text {{item.text}}
        .card__image
          img.card__pic(:src='item.img' :key="item.id" alt="" v-)
</template>

<script>
import Menu from '../components/Menu'
export default {
  name: "Card",
  computed:{
    returnMenu() {
       return this.$store.state.menuLinks
    }
  }
}
</script>

<style lang="scss">

.card {
    background: #F0F0F0;
  
  &__item {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    
  }
  
  &__center {
    display: flex;
    justify-self: center;
    align-items: center;
    height: 100%;

  }
  
  &__desc {
    display: inline-block;
    width:50%;
    padding: 0 172px;
  
  }
  
  &__title {
    font-family: Gilroy, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 53px;
    letter-spacing: -0.0255199px;
    text-transform: uppercase;
    color: #262525;
    text-align: left;
    padding: 0 0 40px 0;
  }
  
  &__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.0220791px;
    color: #262525;
    text-align: left;
  }
  
  &__image {
    width: 50%;
  }
  
  &__pic {
    width: 100%;
    height: auto;
    object-fit: contain;
    
  }
}

</style>