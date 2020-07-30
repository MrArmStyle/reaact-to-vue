<template>
  <div>
    <Hero hero="roomsHero" title="our Room" subtitle="">
      <Banner>
        <router-link to="/" class="btn-primary">
          return home
        </router-link>
      </Banner>
    </Hero>
    <RoomsContainer />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

export default {
  components: {
    Hero,
    Banner,
    RoomsContainer,
  },
};
</script>

<style></style>
