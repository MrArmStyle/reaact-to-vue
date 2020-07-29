<template>
  <section class="services">
    <Title title="services" />
    <div class="services-center">
      <div v-for="item in services" :key="item.title">
        <article class="service">
          <!-- <span>{{item.icon}}</span> -->
          <h6>{{item.title}}</h6>
          <p>{{item.info}}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title";

export default {
  components: {
    Title,
  },
  data() {
    return {
      services: [
        {
          //   icon: <FaCocktail />,
          title: "Free Cocktails",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
        },
        {
          //   icon: <FaHiking />,
          title: "Endless Hiking",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
        },
        {
          //   icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
        },
        {
          //   icon: <FaBeer />,
          title: "Strongest Beer",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
        },
      ],
    };
  },
};
</script>

<style>
</style>