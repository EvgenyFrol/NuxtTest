<template lang="pug">
  section.header
    .header__headline
      p.header__title Первомайская
    .header__links(ref="links")
      a.header__link(v-for="(item, i) of returnLinks"
                    :class="isActive==i?'header__link--active':''"
                    ref="linkItem"
                    @mouseover="returnWidth(i, $event)"
                    @mouseout="mouseOut"
                    :index="i"
                    @click="returnWidthLink(i, $event)"
                    ) {{item.text}}
      .header__links--line(:style="{width: widthLinks + 'px'}" ref="widthLine")
    .header__contacts
      a.header__contact(href="tel:+78888888888" alt="") 8 888 888 88 88
</template>

<script>
export default {
  data () {
    return {
      widthLinks: 0,
      widthLink: 0,
      mouseX: 0,
      mouseItem: 0,
      marginFromParent: 0,
      widthForActiveItem: 0,
      isActive: 0,
      rightDistance: 0,
    }
  },
  computed:{
    returnLinks() {
      return this.$store.state.headerLinks
    }
  },
  methods:{
    returnWidth(i, event) {        
      
      if (this.isActive > i) {
               
        this.$refs.widthLine.style.left = "auto";
        this.$refs.widthLine.style.right = this.rightDistance + 'px';  
        this.widthLinks = this.$refs.links.offsetWidth - event.target.offsetLeft - this.rightDistance;                              
                
      } else  if (this.isActive < i) {  
      
        this.returnMouse(event);
        
      }     
    },    
    returnMouse(event) {    
    
      this.$refs.widthLine.style.right = "auto";
      this.$refs.widthLine.style.left = this.marginFromParent + 'px';
      
      this.$refs.widthLine.style.left = event.target.offsetLeft + event.target.offsetWidth;
      this.widthLinks = event.target.offsetLeft + event.target.offsetWidth - this.marginFromParent;
      
    },
    mouseOut() {
      this.widthLinks = document.querySelector('.header__link--active').offsetWidth;
    },    
    returnWidthLink(i, event) {    

      this.marginFromParent = event.target.offsetLeft;        
      this.rightDistance = event.target.offsetParent.offsetWidth - event.target.offsetLeft - event.target.offsetWidth;
      
      if (this.isActive > i) {    
      
        this.$refs.widthLine.style.left = "auto";
        this.$refs.widthLine.style.right = this.rightDistance + 'px';
        
      } else {
      
        this.$refs.widthLine.style.right = "auto";
        this.$refs.widthLine.style.left = this.marginFromParent + 'px';
        
      }    
      
      this.widthLinks = event.target.offsetWidth;
                    
      this.isActiveItem(i);
      
    },    
    isActiveItem(i) {
    
      this.isActive = i;      
    },
  },
  mounted () {
    this.widthLinks = document.querySelector('.header__link--active').offsetWidth;
    
  }
}
</script>

<style lang='scss'>

.header {
  display: flex;
  justify-content: space-between;
  padding: 23px 62px 17px 62px;
  font-family: "Gilroy", sans-serif;
  text-transform: uppercase;
  color: #262525;
  flex-grow: 0;
  z-index:2;
  
  &__title {        
    font-size: 16px;
    line-height: 21px; 
    font-weight: bold;
  }
  
  &__links {
    width: auto;
    position: relative;
    
               
    &--line {
      position: absolute;
      top: 25px;
      left: 0;
      width: 0;
      max-width: 600px;
      height: 4px;
      background: #D88F5E;
      border-radius: 0.01px;
      transition: width 0.2s ease, left 0.2s, right 0.2s;    
    }   
  }
    
  &__link {
    padding: 5px 23px;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.8px;
    text-decoration: none;
    font-weight: bold;
    color: #262525;  
  }
  
  &__contact {
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: 0.290629px;
    text-decoration: none;
    color: #262525; 
  }
  
  @media (max-width: 1440px) {
  
     &__title,
     &__contact {        
      font-size: 14px;
      line-height: 18px;
    }
  
    &__link {
      padding: 0 16px;
      font-size: 12px;
      line-height: 14px;
    }  
  }
  
  @media (max-width: 1024px) {
  
    &__title,
    &__contact {        
      font-size: 12px;
      line-height: 16px;
    }
  
    &__link {
      padding: 0 10px;
      font-size: 8px;
      line-height: 10px;
    }  
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
    &__title {
      margin-bottom: 10px;
    }
    
    &__links {
      display: contents;
      
      &--line {
        display: none;        
      }   
    } 
    
    &__link {
      padding: 2px 0;      
    } 
    
    &__contacts {
      margin-top: 10px;
    }
    
    .isActive {
      flex: none;
      align-self: center;   
      background: linear-gradient(to top, #D88F5E 50%, #FFF 50%); 
    }
  }
}
</style>