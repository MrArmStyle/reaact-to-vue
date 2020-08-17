<template>
  <div>
    <RoomsFilter />
    <RoomsList />
  </div>
</template>

<script>
// import Loading from "./Loading";
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import myFunc from '../js/MyFunction'

export default {
  components: {
    // Loading,
    RoomsFilter,
    RoomsList
  },
}
</script>

<style></style>
