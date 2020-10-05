<template lang="pug">
  .card__item
    .card__desc
      span.card__number {{index + 1}} / {{quan}}
      h1.card__title {{title}}
      |
      p.card__text(ref="text") {{text}}
        span.card__box(ref="continue" ) ...      
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
    active: Boolean,
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
    },
  },
  mounted: function () {
    this.$nextTick(function () {  
      // if (this.$refs.text.innerHTML.length > 150) {
      //   this.$refs.continue.style.display = "inline-block";
      // }
      this.$refs.text.getClientRects();
    })
  }  
}
</script>

<style lang="scss">

.card {
  
  &__item {
    background: #F0F0F0;
    display: flex;
    align-items: center; 
    width: 100%;    
    max-width: 1516px; 
    height: 100%;
    max-height: 840px;
  }
  
  &__desc {
    display: inline-block;
    width: 50%;
    padding: 0 10%;
    position: relative;
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
    display: none;
    margin-left: 8px;
    width: 28px;
    height: 28px;
    background: #262525;
    padding: 0 7px;
    color: #ffffff; 
    
    &:hover {
      cursor: pointer;
      background: #363535;
      color: #ffffffbd; 
    }
  }
  
  &__number {
    font-family: Gilroy, sans-serif;;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;   
    color: #262525;
    position: absolute;
    left: 20%;
    bottom: -162px;
  }
    
  &__image {    
    width: 50%;
    height: 100%;
  }
  
  &__pic {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 1440px) {
  
    &__title {
      font-size: 33px;
      line-height: 38px;
    }
    
    &__text {
      font-size: 12px;
      line-height: 20px;
  }
  
    &__number {
      bottom: -119px;
    }
  }
  
  @media (max-width:1024px) {
  
    &__title {
      font-size: 22px;
      line-height: 25px;
      padding: 0 0 20px 0;
    }
    
    &__text {
      font-size: 12px;
      line-height: 20px;
    }
  
    &__number {
      font-size: 15px;
      line-height: 17px; 
      bottom: -119px;
      
    }
  }
  
  @media (max-width: 768px) {
  
    &__item {
      display: block;
    }
    
    &__desc {
      width: 100%;
      padding: 30px 10%;
    }
    
    &__image {    
      width: 100%;
    }
    
    &__number {
      top: 20px;
      right: 20px;
      left: auto;
    }    
    
    &__box {
      width: 20px;
      height: 20px;
      padding: 0 5px;
    }
  }
  
  @media (max-width: 375px) {
    &__number {
      font-size: 12px;
      line-height: 14px;       
    }
  }
}
</style>