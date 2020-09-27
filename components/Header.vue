<template lang="pug">
  section.header
    .header__headline
      p.header__title Первомайская
    .header__links(@mouseover="returnWidth(true, $event)" 
                   @mouseout="returnWidth(false)" ref="links"
                   @mousemove="returnMouse")
      a.header__link(v-for="item of returnLinks" :href="item.link" v-) {{item.text}}
      .header__links--line(:style="{width: widthLinks + 'px'}")
    .header__contacts
      a.header__contact(href="tel:+78888888888" alt="") 8 888 888 88 88
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      widthLinks: 0,
      mouseX: 0,
      widthS: 0,
      widthLeft: 0,
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
      } else this.widthLinks = "0";      
    },
    returnMouse(event) {
      this.mouseX = event.clientX;
      this.widthS = this.$refs.links.clientWidth;
      this.widthLeft = this.$refs.links.offsetLeft;
      this.widthLinks = this.mouseX - this.widthLeft;
    }
  }
}
</script>

<style lang='scss'>

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 62px 22px 62px;
  font-family: "Gilroy", sans-serif;
  text-transform: uppercase;
  color: #262525;
  
  &__title {        
    font-size: 16px;
    line-height: 21px; 
    font-weight: bold;
  }
  
  &__links {
    width: auto;
    height: 10px;
               
    &--line {
      margin: 7px 0 0 0;
      width: 0;
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
}

</style>