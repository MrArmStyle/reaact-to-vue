<template>
  <div>
    <section class="featured-rooms">
      <Title title="featured rooms" />
      <div class="featured-rooms-center" v-if="$store.state.featuredRooms">
        <div v-for="room in $store.state.featuredRooms" :key="room.id">
          <Room
            :name="room.name"
            :slug="room.slug"
            :images="room.images"
            :price="room.price"
          />
        </div>
      </div>
      <div v-else>
        <Loading />
      </div>
    </section>
  </div>
</template>

<script>
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default {
  data() {
    return {
      loading: null
    }
  },
  components: {
    Loading,
    Room,
    Title
  },
}
</script>

<style></style>
