<template>
  <div>
    <header :class="hero">
      <Banner title="Luxurious Room" subtitle="Deluxe Rooms Starting At $299" />
    </header>
     <Services />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Services from "../components/Services";

export default {
  components: {
    Banner,Services
  },
  props: {
    children: null,
    hero: { default: "defaultHero" },
  },
};
</script>

<style>
</style>