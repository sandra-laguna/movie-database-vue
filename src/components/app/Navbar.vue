<template>
  <div class="fixed top-0 inset-x-0 py-5 bg-black">
    <nav id="nav" class="h-10 w-full flex flex-row justify-center items-center">
      <router-link v-for="item in itemsMenu" :key="item" :to="`${item.url}`" class="mx-6">
        <img :src="require(`@/assets/img/${item.img}.svg`)" :alt="item.name" class="w-8" />
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsMenu: [
        { name: "Home", url: "/", img: "home" },
        { name: "Movies", url: "/movies", img: "movies" },
        { name: "TV", url: "/tv", img: "tv" },
        { name: "Search", url: "/search", img: "search" }
      ]
    };
  }
};
</script>
