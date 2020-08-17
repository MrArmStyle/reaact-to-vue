<template>
  <div>
    <section class="filter-container">
      <Title title="search rooms" />
      <form class="filter-form">
        <!-- {/* select type */} -->
        <div class="form-group">
          <label for="type">room type</label>
          <select
            v-model="$store.state.type"
            name="type"
            class="form-control"
            @change="myFunc.filterRooms($event) "
          >
            <option v-for="option in types" v-bind:value="option" v-bind:key="option">{{ option }}</option>
          </select>
        </div>
        <!-- {/* end of select type */} -->
        <!-- {/* guests */} -->
        <div class="form-group">
          <label for="capacity">Guests</label>
          <select
            v-model="$store.state.capacity"
            name="capacity"
            class="form-control"
            @change="myFunc.filterRooms($event) "
          >
            <option v-for="option in people" v-bind:value="option" v-bind:key="option">{{ option }}</option>
          </select>
        </div>
        <!-- {/* end of guests */} -->
        <!-- {/* room price */} -->
        <div class="form-group">
          <label for="price">room price ${{$store.state.price}}</label>
          <input
            type="range"
            v-model="$store.state.price"
            name="price"
            :min="$store.state.minPrice"
            :max="$store.state.maxPrice"
            class="form-control"
            @input="myFunc.filterRooms($event) "
          />
        </div>
        <!-- {/* end of room price*/} -->
        <!-- {/* size */} -->
        <div class="form-group">
          <label for="price">room size</label>
          <div class="size-inputs">
            <input
              type="number"
              v-model="$store.state.minSize"
              name="minSize"
              class="size-input"
              @change="myFunc.filterRooms($event) "
            />
            <input
              type="number"
              v-model="$store.state.maxSize"
              name="maxSize"
              class="size-input"
              @change="myFunc.filterRooms($event) "
            />
          </div>
        </div>
        <!-- {/* end of select type */} -->
        <!-- {/* extras */} -->
        <div class="form-group">
          <div class="single-extra">
            <input
              type="checkbox"
              v-model="$store.state.breakfast"
              name="breakfast"
              @change="myFunc.filterRooms($event) "
            />
            <label for="breakfast">breakfast</label>
          </div>
          <div class="single-extra">
            <input
              type="checkbox"
              v-model="$store.state.pets"
              name="pets"
              @change="myFunc.filterRooms($event) "
            />
            <label for="pets">pets</label>
          </div>
        </div>
        <!-- {/* end of extras type */} -->
      </form>
    </section>
  </div>
</template>

<script>
import Title from './Title'
import myFunc from '../js/MyFunction'

export default {
  components: {
    Title
  },
  data() {
    return {
      myFunc,
      types: [],
      people: []
    }
  },
  created() {
    this.types = this.getUnique(this.$store.state.data, 'type')
    this.types = ['all', ...this.types]
    this.people = this.getUnique(this.$store.state.data, 'capacity')
    this.$store.state.maxPrice = Math.max(...this.$store.state.data.map(item => item.fields.price))
    this.$store.state.price = this.$store.state.maxPrice
    this.$store.state.maxSize = Math.max(...this.$store.state.data.map(item => item.fields.size))
  },
  methods: {
    getUnique(items, value) {
      return [...new Set(items.map(item => item.fields[value]))]
    }
  }
}
</script>

<style>
</style>