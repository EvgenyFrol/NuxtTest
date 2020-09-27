<template lang="pug">
  .menu
    .menu__link(v-for="item of returnMenu" :key="item.id" @click="$event.target.classList.toggle('active')" v-) {{item.title}}
</template>

<script>
export default {
  name: 'Menu',
  computed:{
    returnMenu() {
      return this.$store.state.menuLinks
    }
  }
}
</script>

<style lang="scss">
  .menu {
    width: 22%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    &__link {
      margin: 16px 0;
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 0.567739px;
      text-decoration: none;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
</style>