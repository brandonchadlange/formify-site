<template>
  <nav id="links" class="invisible md:visible">
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
      links: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Platform",
          path: "/platform",
        },
        {
          title: "Tools",
          path: "/tools",
        },
        {
          title: "Learn",
          path: "/learn",
        },
        {
          title: "Blog",
          path: "/blog",
        },
        {
          title: "About",
          path: "/about",
        },
      ],
    };
  },
};
</script>
