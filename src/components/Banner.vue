<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <div />
    <p>{{ subtitle }}</p>
    <router-link to="/rooms" class="btn-primary">OUR ROOMS</router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: null,
    subtitle: null,
    children: null,
  },
};
</script>

<style></style>
