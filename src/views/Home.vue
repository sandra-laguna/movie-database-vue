<template>
  <div
    class="h-screen bg-cover flex justify-center relative"
    :style="{
      'background-image':
        'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url(' + urlImgHome + ')'
    }"
  >
    <div class="m-auto opacity-100 w-2/3 h-2/3 bg-black bg-opacity-75 flex flex-col items-center justify-center">
      <h1 class="text-3xl pb-6 lg:text-8xl">Welcome to</h1>
      <img src="@/assets/img/logo.svg" alt="logo" class="px-6" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlImgHome: require("@/assets/img/bg_home.jpg")
    };
  }
};
</script>
