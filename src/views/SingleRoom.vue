<template>
  <div>
    <Hero
      :img="room.images[0] || defaultBcg"
      :title="room.name + ' room'"
      hero="styleHero"
      btntext="back to rooms"
    ></Hero>
    <section class="single-room">
      <div class="single-room-images">
        <div v-for="item in room.images" :key="item.images">
          <img :src="item" alt="name" />
        </div>
      </div>
      <div class="single-room-info">
        <article class="desc">
          <h3>details</h3>
          <p>{{ room.description }}</p>
        </article>
        <article class="info">
          <h3>info</h3>
          <h6>price : ${{ room.price }}</h6>
          <h6>size : {{ room.size }} SQFT</h6>
          <h6>
            max capacity :
            {{
            room.capacity > 1
            ? `${room.capacity} people`
            : `${room.capacity}
            person`
            }}
          </h6>
          <h6>{{ room.pets ? "pets allowed" : "no pets allowed" }}</h6>
          <h6>{{ room.breakfast ? "free breakfast included" : '' }}</h6>
        </article>
      </div>
    </section>
    <section class="room-extras">
      <h6>extras</h6>
      <ul class="extras">
        <div v-for="item in room.extras" :key="item">
          <li>- {{ item }}</li>
        </div>
      </ul>
    </section>
  </div>
</template>

<script>
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'

export default {
  data() {
    return {
      room: null
    }
  },
  components: {
    Hero
  },
  async created() {
    this.getRoom(this.$route.params.slug)
  },
  methods: {
    getRoom(slug) {
      let tempRooms = this.$store.state.rooms
      this.room = tempRooms.find(room => room.slug === slug)
    }
  }
}
</script>

<style></style>
