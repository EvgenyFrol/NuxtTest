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
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-grow:1;
  }

.menu {
  width: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
  cursor: pointer;
}
}


</style>