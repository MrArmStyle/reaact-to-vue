<template>
  <div>
    <section class="featured-rooms">
      <Title title="featured rooms" />
      <div class="featured-rooms-center" v-if="rooms">
        <div v-for="room in rooms" :key="room.sys.id">
          <Room
            :name="room.fields.name"
            :slug="room.fields.slug"
            :images="room.fields.images"
            :price="room.fields.price"
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
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default {
  data() {
    return {
      loading: null,
      rooms: null,
    };
  },
  components: {
    Loading,
    Room,
    Title,
  },
  created() {
    this.rooms = this.$store.state.data.filter((room) => {
      return room.fields.featured === true;
    });
  },
};
</script>

<style></style>
