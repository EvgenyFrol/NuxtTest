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
      Card(v-for="(item, i) in data"
           :active="isActiveNumber==i"
           :title="item.title"
           :text="item.text"
           :img="item.img"
           :alt="item.alt"
           :callback="isActive"
           :quan="data.length"
           :index="i"
           :key="i"
           :animateTop="animateTop"
           )
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
        console.log('меньше');
          
      } else {
              
        this.animateTop = true;
        console.log('больше');
        
      }    
            
      this.isActiveNumber = i; 
      
    },
  },
}
</script>

<style lang="scss">
.container {
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
</style>