<template>
  <div>
    <Hero
      :img="room.fields.images[0].fields.file.url"
      :title="room.fields.name + ' room'"
      hero="styleHero"
    >
      <Banner :title="room.fields.name + ' room'">
        <router-link to="/rooms" class="btn-primary">
          back to rooms
        </router-link>
      </Banner>
    </Hero>
    <section class="single-room">
      <div class="single-room-images">
        <div v-for="item in room.fields.images" :key="item.fields.file.url">
          <img :src="item.fields.file.url" alt="name" />
        </div>
      </div>
      <div class="single-room-info">
        <article class="desc">
          <h3>details</h3>
          <p>{{ room.fields.description }}</p>
        </article>
        <article class="info">
          <h3>info</h3>
          <h6>price : ${{ room.fields.price }}</h6>
          <h6>size : {{ room.fields.size }} SQFT</h6>
          <h6>
            max capacity :
            {{
              room.fields.capacity > 1
                ? `${room.fields.capacity} people`
                : `${room.fields.capacity}
            person`
            }}
          </h6>
          <h6>{{ room.fields.pets ? "pets allowed" : "no pets allowed" }}</h6>
          <h6>{{ room.fields.breakfast && "free breakfast included" }}</h6>
        </article>
      </div>
    </section>
    <section class="room-extras">
      <h6>extras</h6>
      <ul class="extras">
        <div v-for="item in room.fields.extras" :key="item">
          <li>- {{ item }}</li>
        </div>
      </ul>
    </section>
  </div>
</template>

<script>
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default {
  data() {
    return {
      room: null,
    };
  },
  components: {
    Hero,
    Banner,
  },
  async created() {
    this.getRoom(this.$route.params.slug);
  },
  methods: {
    getRoom(slug) {
      let tempRooms = this.$store.state.data;
      this.room = tempRooms.find((room) => room.fields.slug === slug);
    },
  },
};
</script>

<style></style>
