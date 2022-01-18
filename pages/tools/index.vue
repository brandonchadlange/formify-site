<template>
  <div class="my-20 max-w-6xl m-auto">
    <div class="">
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("blog-builder.header.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("blog-builder.header.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("blog-builder.header.cta.start") }}
        </button>
        <button
          class="ml-4 px-6 py-3 text-xl bg-transparent border-2 border-gray-500 text-gray-500 rounded-sm mt-8"
        >
          {{ $t("blog-builder.header.cta.learn") }}
        </button>
      </div>
      <div class="flex justify-center">
        <!-- <div class="p-8 rounded-full bg-gray-200 w-80 h-80">
          <img
            class="w-96 h-96 object-contain -translate-y-16 absolute"
            src="~/assets/img/tools/icons/blog.png"
            alt="blog tool icon"
          />
        </div> -->
      </div>
    </div>
    <hr class="my-20" />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
      <ToolCard v-for="tool in tools" :key="tool.key" :tool="tool" />
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
  data() {
    return {
      tools: require("../../data/tools.json"),
    };
  },
};
</script>
