<template>
  <div>
    <div
      @click="show = true"
      class="p-2 border border-gray-400 rounded-md text-gray-500 active:bg-white block md:hidden"
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
    <div class="h-screen w-screen bg-white fixed top-0 left-0 p-4" v-if="show">
      <div></div>
      <ul>
        <li v-for="link in links" :key="link.path" @click="goTo(link.path)">
          <NuxtLink class="py-2 text-2xl" :to="link.path">{{
            link.title
          }}</NuxtLink>
          <hr class="my-4" />
        </li>
      </ul>
      <button
        @click="show = false"
        class="w-full px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      links: require("./nav-links.json"),
    };
  },
  methods: {
    goTo(link) {
      this.show = false;
    },
  },
};
</script>
