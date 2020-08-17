<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <div />
    <p>{{ subtitle }}</p>
    <router-link :to="btntext == 'return home' ? '/' : '/rooms'" class="btn-primary">{{ btntext }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: null,
    subtitle: null,
    btntext: null,
    children: null
  }
}
</script>

<style></style>
