<template lang="pug">
  section.header
    .header__headline
      p.header__title Первомайская
    .header__links(ref="links")
      a.header__link(v-for="(item, i) of returnLinks"
                    ref="linkItem"
                    @mouseover="returnWidth(i, $event)"
                    :class="isActive==i?'isActive':''"
                    :index="i"
                    @click="returnWidthLink(i, $event)"
                    v-) {{item.text}}
      .header__links--line(:style="{width: widthLinks + 'px', left: marginFromParent + 'px'}" ref="widthLine")
    .header__contacts
      a.header__contact(href="tel:+78888888888" alt="") 8 888 888 88 88
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      widthLinks: 0,
      widthLink: 0,
      mouseX: 0,
      mouseItem: 0,
      marginFromParent: 0,
      widthForActiveItem: 0,
      isActive: 0,
      directionLeft: true,
      directionRight: false,
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
        this.$refs.widthLine.style.right = 0;
        
        this.widthLinks = this.$refs.links.offsetWidth - event.target.offsetLeft
        
        this.$refs.widthLine.style.right = 0;
        console.log(this.widthLinks)
      } else {
        this.returnMouse(event);
        console.log('right')
      }
      
      // console.log(i)
      // console.log(this.isActive)
      
    },    
    returnMouse(event) {       
      this.widthLinks = event.target.offsetLeft + event.target.offsetWidth - this.marginFromParent;
      
    },    
    returnWidthLink(i, event) {    
      this.marginFromParent = event.target.offsetLeft;     
      this.widthLinks = event.target.offsetWidth - this.mouseItem;
      
      this.isActiveItem(i);
      
      // console.log(this.$refs.linkItem[i].offsetLeft) // возвращает расстояние
      // console.log(event.target.offsetWidth) // возвращает ширину
  
    },
    
    isActiveItem(i) {
      this.isActive = i;      
    },
  },
  mounted () {
    this.widthLinks = document.querySelector('.isActive').offsetWidth;
  }
}
</script>

<style lang='scss'>

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 62px;
  font-family: "Gilroy", sans-serif;
  text-transform: uppercase;
  color: #262525;
  flex-grow: 0;
  
  &__title {        
    font-size: 16px;
    line-height: 21px; 
    font-weight: bold;
  }
  
  &__links {
    width: auto;
    height: 10px;
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
      transition: width 0.2s ease;
    }   
  }
    
  &__link {
    padding: 0 23px;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.6px;
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
      padding: 0 18px;
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
      padding: 0 14px;
      font-size: 10px;
      line-height: 12px;
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