<template lang="pug">
.card
  .card__item
    transition(v-for="(item, i) in data" :name="animateTop?'descUp':'descDown'")
      .card__desc( v-if="active===i")
        h1.card__title {{item.title}}
        |
        p.card__text(ref="actText") {{item.text}}
          span.card__box(ref="continue" ) ...  
    span.card__number {{active + 1}} / {{data.length}}
    transition(v-for="(item, i) in data" :name="animateTop?'imgDown':'imgUp'")
      .card__image( v-if="active === i")
        img.card__pic(:src='item.img' :alt='item.alt')
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      isActiveNumber: 0,
      data: this.$store.state.menuLinks,
    }
  }, 
  props: {
    active: Number,
    animateTop: Boolean,
  },
  computed:{
    returnMenu() {
      return this.$parent.$data.data
    },
  },
}
</script>

<style lang="scss">
.card {
  width: 84%; 
  height: 100%;
  background: #F0F0F0;
  position: relative;
  overflow: hidden;

  &__item {    
    display: flex;
    align-items: center; 
    width: 100%;    
    max-width: 1516px; 
    height: 100%;
  }
    
  &__desc {
    display: inline-block;
    width: 435px;
    position: absolute;
    left: 11.5%;
    top: 38%;
    transition: all 0.5s ease;
  }
  
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 2.9em;
    line-height: 53px;
    letter-spacing: -3.65px;
    text-transform: uppercase;
    color: #262525;
    text-align: left;
    padding: 0 0 42px 0;
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
    white-space: normal;
  }
  
  &__box {
    display: inline-block;
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
    left: 11%;
    bottom: 11%;
  }
    
  &__image {    
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    transition: all 0.5s ease;
    overflow: hidden;
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
      font-size: 15px;
      line-height: 17px;   
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
      font-size: 13px;
      line-height: 15px; 
      bottom: -119px;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
  
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


.descUp-enter {
  transform: translateY(100%);
  opacity: 0;
}

.descUp-enter-to {
  opacity: 1;
  transform: none;  
  }

.descUp-leave {
  opacity: 1;
}

.descUp-leave-to {
  opacity: 0;
}

.descDown-enter {
  transform: translateY(-100%);
  opacity: 0;
}

.descDown-enter-to {
  opacity: 1;
  transform: none;  
}

.descDown-leave {
  opacity:1;
}

.descDown-leave-to {
  opacity:0;
}

.imgUp-enter {
  transform: translateY(100%);
  z-index:1;
}

.imgUp-enter-to {
  z-index:1;
}

.imgUp-leave {
  z-index:1;
}

.imgUp-leave-to {
  z-index:0;
}

.imgDown-enter {
  transform: translateY(-100%);
  z-index:1;
}

.imgDown-enter-to {
  z-index:1;
 }

.imgDown-leave {
  z-index:0;  
}
.imgDown-leave-to {
  z-index:0;  
}

</style>