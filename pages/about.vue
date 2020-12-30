<template lang="pug">
  .container
    .menu
      Menu(v-for="(item, i) in data"
          :title="item.title"
          :active="isActiveNumber==i"
          :key="i",
          :index="i"
          @change="isActive")

    Card(:active="isActiveNumber"
         :animateTop="animateTop"
         ref="card")

</template>

<script>
export default {
  name: 'Container',
  data () {
    return {
      isActiveNumber: 0,
      data: this.$store.state.menuLinks,
      animateTop: false,
    }
  },
  methods: {
    isActive(value) {

      let a = this.isActiveNumber;

      if (value.index < a) {

        this.animateTop = false;

      } else {

        this.animateTop = true;

      }

      this.isActiveNumber = value.index;
      

    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;


  @media (max-width: 768px) {
    display: block;
    height: auto;
  }
}

.menu {
  width: 14%;
  margin: 14.8% auto 0 0;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-self: start;
    flex-flow: wrap;
  }
}
</style>
