<template lang="pug">
  section.container
    .menu
      Menu(v-for="(item, i) in data"
          :title="item.title"
          :active="isActiveNumber==i"
          :callback="isActive"
          :key="i",
          :index="i")

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
    isActive(i, item) {

      let a = this.isActiveNumber;

      if (i < a) {

        this.animateTop = false;

      } else {

        this.animateTop = true;

      }

      this.isActiveNumber = i;

    }
  }
}
</script>

<style lang="scss">
.container {
  box-sizing: border-box;
  display: flex;
  height: 100%;
  opacity: 1;

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
