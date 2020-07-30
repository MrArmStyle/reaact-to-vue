<template>
  <div>
    <RoomsList :rooms="$store.state.data" />
  </div>
</template>

<script>
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
export default {
  components: {
    // Loading,
    // RoomsFilter,
    RoomsList,
  },
};
</script>

<style></style>
