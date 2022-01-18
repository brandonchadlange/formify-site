<template>
  <nav id="links" class="hidden md:block">
    <ul class="flex md:gap-x-12">
      <li v-for="link in links" :key="link.path">
        <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: require("./nav-links.json"),
    };
  },
};
</script>
