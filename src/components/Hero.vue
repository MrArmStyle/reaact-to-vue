<template>
  <div>
    <header
      :class="hero"
      :style="img ? 'background: url(' + img + ') center/cover no-repeat;' : ''"
    >
      <Banner :title="title" :subtitle="subtitle" :btntext="btntext" />
    </header>
  </div>
</template>

<script>
import Banner from "../components/Banner";

export default {
  components: {
    Banner,
  },
  props: {
    img: null,
    title: null,
    subtitle: null,
    btntext: null,
    children: null,
    hero: { default: "defaultHero" },
  },
};
</script>

<style></style>
