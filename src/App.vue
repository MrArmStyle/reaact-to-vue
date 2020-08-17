<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/Navbar'
import items from './data'

export default {
  components: {
    NavBar
  },
  async mounted() {
    // this.getData();
    this.$store.state.rooms = await this.formatData(items)
    this.$store.state.sortedRooms = this.$store.state.rooms
    this.$store.state.featuredRooms = this.$store.state.rooms.filter(room => {
      return room.featured === true
    })
    //
    this.$store.state.maxPrice = Math.max(...this.$store.state.rooms.map(item => item.price))
    this.$store.state.price = this.$store.state.maxPrice
    this.$store.state.maxSize = Math.max(...this.$store.state.rooms.map(item => item.size))
  },
  methods: {
    formatData(items) {
      let tempItems = items.map(item => {
        let id = item.sys.id
        let images = item.fields.images.map(image => image.fields.file.url)

        let room = { ...item.fields, images, id }
        return room
      })
      return tempItems
    }
  }
}
</script>
