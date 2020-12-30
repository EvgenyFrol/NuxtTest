<template lang="pug">
  .content
    Header
    transition(name="page")
      Nuxt
    Footer
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'

export default {

}
</script>

<style>

.page-enter-active,
.page-leave-active,
.page-enter,
.page-leave-to  {
  transition: opacity 0.5s ease;
}

.page-enter {
  opacity: 0;
}

.page-enter-to {
  opacity: 1;

  }

.page-leave {
  opacity: 0;
}

.page-leave-to {
  opacity: 0;
}

</style>
