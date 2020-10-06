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
  },
}
</script>

<style lang="scss">
.container {
  height: 100%;
  max-height: 840px;
  box-sizing: border-box;
  display: flex;
  
  @media (max-width: 768px) {
    display: block;
  }
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
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
    flex-flow: wrap;
  }
}

.card {
  width: 84%; 
  
  @media (max-width: 768px) {
    width: 100%;
  }
}

.v-leave .fade-enter-active, .fade-enter-to, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>