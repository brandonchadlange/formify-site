<template>
  <div class="my-20 max-w-6xl m-auto">
    <h1 class="text-5xl md:text-6xl">Tools</h1>
    <h2 class="text-2xl md:text-3xl">
      Website tools for successful businesses
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
      <NuxtLink class="p-2 border-2 rounded-md bg-white" to="/tools/search"
        >Search</NuxtLink
      >
      <NuxtLink class="p-2 border-2 rounded-md bg-white" to="/tools/blog"
        >Blog</NuxtLink
      >
      <NuxtLink
        class="p-2 border-2 rounded-md bg-white"
        to="/tools/subscriptions"
        >Subscriptions</NuxtLink
      >
      <NuxtLink
        class="p-2 border-2 rounded-md bg-white"
        to="/tools/notifications"
        >Notifications</NuxtLink
      >
      <NuxtLink class="p-2 border-2 rounded-md bg-white" to="/tools/modals"
        >Modals</NuxtLink
      >
      <NuxtLink class="p-2 border-2 rounded-md bg-white" to="/tools/courses"
        >Courses</NuxtLink
      >
      <NuxtLink
        class="p-2 border-2 rounded-md bg-white"
        to="/tools/documentation"
        >Documentation</NuxtLink
      >
      <NuxtLink
        class="p-2 border-2 rounded-md bg-white"
        to="/tools/call-to-action"
        >Call To Action</NuxtLink
      >
      <NuxtLink
        class="p-2 border-2 rounded-md bg-white"
        to="/tools/frequently-asked-questions"
        >FAQ</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head: {
    title: "Formify - The flexibility your site needs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Quickly add new and exciting features to your website without needing to know how to code!",
      },
    ],
  },
};
</script>
