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
      .header__links--line(:style="{width: widthLinks + 'px', marginLeft: marginFromParent + 'px'}" ref="widthLine")
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
      widthS: 0,
      widthLeft: 0,
      mouseItem: 0,
      mouseItems: 0,
      marginFromParent: 0,
      widthForActiveItem: 0,
      isActive: 0,
    }
  },
  computed:{
    returnLinks() {
      return this.$store.state.headerLinks
    }
  },
  methods:{
    returnWidth(mouseInside, event) {
      if (mouseInside) {
        this.widthLinks = "100";  
        this.returnMouse(event)
      } else this.widthLinks = "0";      
    },
    returnMouse(event) {          
    
      this.widthLinks = event.target.offsetLeft + event.target.offsetWidth - this.marginFromParent
      
    },
    returnWidthLink(i, event) {    
      
      this.mouseItems = event.clientX - event.target.offsetLeft;       
      this.widthLinks = event.target.offsetWidth - this.mouseItem;
      this.marginFromParent = event.target.offsetLeft;
      
      if (this.$refs.linkItem[i].getAttribute('index') > 0) {
        console.log(event.target.offsetWidth);    
      };
     
      console.log(this.$refs.linkItem[i].offsetLeft) // возвращает расстояние
      console.log(event.target.offsetWidth) // возвращает ширину
      
      if (this.$refs.linkItem[i].offsetLeft > 0) {
      
      }
      
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
      margin: 7px 0 0 0;
      width: 0;
      height: 4px;
      background: #D88F5E;
      border-radius: 0.01px;
      transition: width 0.2s ease;
      animation-direction: normal;
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
    
    &--active {
      margin: 7px 0 0 0;
      width: 0;
      height: 4px;
      background: #D88F5E;
      border-radius: 0.01px;
      transition: width 0.1s ease;
    }
  }
  
  &__contact {
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: 0.290629px;
    text-decoration: none;
    color: #262525; 
  }
}
</style>