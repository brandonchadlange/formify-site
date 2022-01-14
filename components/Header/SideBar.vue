<template>
  <div class="h-screen w-screen bg-white fixed top-0 left-0 p-4" v-if="show">
    <div></div>
    <ul>
      <li v-for="link in links" :key="link.path">
        <NuxtLink class="py-2 text-2xl" :to="link.path">{{
          link.title
        }}</NuxtLink>
        <hr class="my-4" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      links: require("./nav-links.json"),
    };
  },
};
</script>
