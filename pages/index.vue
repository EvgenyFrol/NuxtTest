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

<style>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
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
}

.burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
}

.line1 {
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

.line3 {
  width: 20px;
  height: 2px;
  background: #fff;
}
</style>
