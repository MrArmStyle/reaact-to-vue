<template>
  <div>
    <section class="roomslist">
      <div class="roomslist-center">
        <div v-for="room in $store.state.data" :key="room.sys.id">
          <Room
            :name="room.fields.name"
            :slug="room.fields.slug"
            :images="room.fields.images"
            :price="room.fields.price"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Room from "../components/Room";
export default {
  components: {
    Room,
  },
};
</script>

<style></style>
