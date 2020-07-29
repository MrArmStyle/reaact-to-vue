<template>
  <nav class="navbar">
    <div class="nav-center">
      <div class="nav-header">
        <router-link to="/">
          <img src="../images/logo.svg" alt="Beach Resort" />
        </router-link>
        <button type="button" class="nav-btn" @click="isOpen = !isOpen">
          <!-- <FaAlignRight class="nav-icon" /> -->    
          =
        </button>
      </div>
      <ul :class="isOpen ? 'nav-links show-nav' : 'nav-links'">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/rooms">Rooms</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
</style>