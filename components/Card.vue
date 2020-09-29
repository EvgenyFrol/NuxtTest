<template lang="pug">
  .card__item
    .card__textWrap
      .card__desc
        h1.card__title {{title}}
        |
        p.card__text {{text}}
          span.card__box ...
        
        span.card__number {{index + 1}} / {{quan}}
      .card__image
        img.card__pic(:src='img' :alt='alt' v-)
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      show: true,
      
    }
  },
  props: {
    title: String,
    text: String,
    img: String,
    alt: String,
    index: Number,
    quan: Number,
    
  },
  computed:{
    returnMenu() {
       return this.$parent.$data.data
    }
  }
}
</script>

<style lang="scss">

.card {      
  &__item {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    background: #F0F0F0;
  }
  
  &__textWrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  &__desc {
    display: inline-block;
    width:50%;
    height: 100%;
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
  
  &__box {
    margin-left: 5px;
    width: 28px;
    height: 28px;
    background: #262525;
    padding: 3px 7px;
    color: #ffffff;
  }
  
  &__number {
    font-family: Gilroy, sans-serif;;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;   
    color: #262525;
  }
  
  &__image {    
    width: 50%;
    height: 100%;
  }
  
  // &__pic {
  //   float: right;
  // }
}
</style>