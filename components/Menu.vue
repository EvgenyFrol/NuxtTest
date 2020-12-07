<template lang="pug">
  .menu__link(@click="callback(index)"
              @mousemove="widthTitle"
              :class="active?'menu__link--active':''"
              ref="linksWidth") {{title}}
</template>

<script>
export default {
  name: 'Menu',
  props: {
    title: String,
    active: Boolean,
    callback: Function,
    index: Number,
  },
  data () {
    return {
      widthLinkTitle: 0,
    }
  },
  computed:{
    returnMenu() {
      return this.$parent.$data.data
    }
  },
  methods: {
    widthTitle(event) {
      this.widthLinkTitle = this.$refs.linksWidth.clientWidth;
    },
  }
}
</script>

<style lang="scss">
.menu {
  &__link {
    height: auto;
    width: fit-content;
    padding: 2px 4px;
    margin-top: 28px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.567739px;
    text-decoration: none;
    
    
    &:hover {
      background: linear-gradient(to top, #EBD8CC 50%, #FFF 50%); 
 
    }
    
    &--active {
      background:linear-gradient(to top, #EBD8CC 50%, #FFF 50%);
      font-family: Roboto;
      font-style: normal;    
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.567739px;      
      text-transform: uppercase;
      
          
      @media (max-width: 1440px) {
        margin-top: 20px;
      }
      
      @media (max-width:1024px) {
        margin-top: 15px;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
}


</style>