<template>
  <div>
    <Hero title="Luxurious Room" subtitle="Deluxe Rooms Starting At $299"></Hero>
    <Services />
    <FeaturedRooms />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default {
  components: {
    Hero,
    Services,
    FeaturedRooms,
  },
  methods: {},
};
</script>

<style></style>
