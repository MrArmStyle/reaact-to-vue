<template>
  <div>
    <article class="room">
      <div class="img-container">
        <img :src="images[0] ? images[0] : defaultImg" alt="single room" />
        <div class="price-top">
          <h6>${{ price }}</h6>
          <p>per night</p>
        </div>
        <router-link
          :to="'/rooms/' + slug"
          class="btn-primary room-link"
          @click.native="scrollToTop()"
        >features</router-link>
      </div>
      <p class="room-info">{{ name }}</p>
    </article>
  </div>
</template>

<script>
import defaultImg from '../images/room-1.jpeg'

export default {
  props: {
    name: null,
    slug: null,
    images: null,
    price: null
  },
  data() {
    return {
      defaultImg
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style></style>
