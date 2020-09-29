<template lang="pug">
  .menu__link(@click="callback(index)" 
              :class="active?'active':''") {{title}}
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
  computed:{
    returnMenu() {
      return this.$parent.$data.data
    }
  }
}
</script>

<style lang="scss">
  .menu__link {
    margin-top: 32px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.567739px;
    text-decoration: none;
  }   
</style>