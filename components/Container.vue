<template lang="pug">
  section.container
    .menu 
      Menu(v-for="(item, i) in data" 
          :title="item.title" 
          :active="isActiveNumber==i" 
          :callback="isActive" 
          :key="i",
          :index="i")
    .card
      transition(name="fade")
        Card(v-for="(item, i) in data"
             v-if="isActiveNumber==i"
             :title="item.title"
             :text="item.text"
             :img="item.img"
             :alt="item.alt"
             :callback="isActive"
             :quan="data.length"
             :index="i"
             :key="i")
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {
      isActiveNumber: 0, 
      data: this.$store.state.menuLinks,
    }
  },
  methods: {
    isActive(i) {
      this.isActiveNumber = i;     
    },
  }
}
</script>

<style lang="scss">
.container {
  height: 100%;
  max-height: 840px;
  box-sizing: border-box;
  display: flex;
  }

.menu {
  width: 14%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 0 0;

  &:hover {
  cursor: pointer;
  }
}

.card {
  width: 78%;  
}

.v-leave .fade-enter-active, .fade-enter-to, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>