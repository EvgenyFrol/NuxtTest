<template lang="pug">
  .content
    Header
    Container
    Footer
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
</style>
