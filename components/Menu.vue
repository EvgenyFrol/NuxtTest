<template lang="pug">
  .menu__link(@click="callback(index)"
              @mousemove="widthTitle"
              :class="active?'menu__link--active':''"
              ref="linksWidth") 
    span {{title}}
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
    outline: none;
    height: auto;
    width: fit-content;
    padding: 2px 4px;
    background: transparent;
    margin-top: 28px;
    font: 300 13px/15px 'Roboto', sans-serif;
    letter-spacing: 0.567739px;
    text-decoration: none;    
    -webkit-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    transition: all 0.3s ease-in-out;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      text-decoration: none;
      background: linear-gradient(to top, #EBD8CC 50%, #FFF 50%);
      font-weight: 300;
      opacity: 0;
      transition: opacity 0.5s ease,
                  text-shadow 0.5s ease;
    }

    & > span {
      position: relative;
      z-index: 1;
    }
    
    &:hover::after {
      opacity: 1;
    }
    
    &--active > span {
      letter-spacing: 0.567739px;      
      text-transform: uppercase;  
      text-shadow:
        0.5px -0.5px 0 #000,
        0.5px -0.5px 0 #000,
        0.5px 0.5px 0 #000,
        0.5px 0.5px 0 #000;
        // -webkit-transition: all .5s;
        // -moz-transition: all .5s;
        // -o-transition: all .5s;
        transition: text-shadow 0.5s ease;    
    }

    &--active::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      text-decoration: none;
      background: linear-gradient(to top, #EBD8CC 50%, #FFF 50%);
      opacity: 1; 
    }
  }
}


</style>