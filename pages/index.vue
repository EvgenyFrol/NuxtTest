<template lang="pug">
  .content
    Header
    Container
    Footer
    .button
    .buttonBurger
      .burger
        .line1
        .line2
        .line3
</template>

<script>
import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'

export default {
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.button {
  width: 70px;
  height: 70px;
  background: #262525;
  position: absolute;
  top: 25px;
  left: 25px;
}

.buttonBurger {
  width: 70px;
  height: 70px;
  background: #262525;
  position: absolute;
  top: 25px;
  right: 25px;
  padding: 25px;
  
  &:hover {
  
    .line1,
    .line3 {
      width: 25px;
      height: 3px;
    }
    
    .line2 {
      width: 45px;
      height: 3px;
      margin: 5px 0;
    }  
  }
}

.burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
}

.line1,
.line2,
.line3 {
  transition: width 0.2s ease,
              height 0.2s ease,
              margin 0.2s ease;              
}

.line1,
.line3 {
  width: 20px;
  height: 2px;
  background: #fff;
}

.line2 {
  width: 42px;
  height: 2px;
  margin: 6px 0;
  background: #fff;
}
</style>
