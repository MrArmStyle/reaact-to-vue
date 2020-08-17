<template>
  <div>
    <section class="roomslist">
      <div class="roomslist-center">
        <div v-for="room in $store.state.sortedRooms" :key="room.id">
          <Room :name="room.name" :slug="room.slug" :images="room.images" :price="room.price" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Room from '../components/Room'
export default {
  components: {
    Room
  }
}
</script>

<style></style>
