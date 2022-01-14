<template>
  <div id="navbar" class="w-full">
    <div id="navbar-content" class="max-w-6xl flex justify-between m-auto">
      <NuxtLink to="/">
        <div id="home" class="font-primary text-5xl text-pink-500">Formify</div>
      </NuxtLink>
      <div
        class="p-2 border border-gray-400 rounded-md text-gray-500 active:bg-white visible md:invisible"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <HeaderNavLinks />
    </div>
    <HeaderSideBar :show="showSideBar" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSideBar: false,
    };
  },
};
</script>
