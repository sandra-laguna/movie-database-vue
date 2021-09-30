<template>
  <div :style="bgImg" class="bg-filmSize bg-right-top bg-no-repeat bg-opacity-10 min-h-screen">
    <nav id="nav" class="h-24 bg-gray-900 w-full flex flex-row justify-center items-center">
      <router-link v-for="item in itemsMenu" :key="item" :to="`${item.url}`" class="mx-8">
        <img :src="require(`@/assets/img/${item.img}.svg`)" :alt="item.name" class="w-8" />
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImg: {
        backgroundImage: `url(${require("@/assets/img/bg-right.png")})`
      },
      itemsMenu: [
        { name: "Home", url: "/", img: "home" },
        { name: "Movies", url: "/movies", img: "movies" },
        { name: "TV", url: "/tv", img: "tv" },
        { name: "Search", url: "/searchfilm", img: "search" }
      ]
    };
  }
};
</script>

