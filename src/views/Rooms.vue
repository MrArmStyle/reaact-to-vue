<template>
  <div>
    <Hero hero="roomsHero" title="our Room" subtitle btntext="return home"></Hero>
    <RoomsContainer />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import RoomsContainer from '../components/RoomsContainer'

export default {
  components: {
    Hero,
    RoomsContainer
  }
}
</script>

<style></style>
