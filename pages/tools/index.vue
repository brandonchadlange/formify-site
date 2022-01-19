<template>
  <div class="my-0 md:my-20 mt-10 max-w-6xl m-auto">
    <div class="">
      <div>
        <h1 class="text-4xl md:text-5xl font-semibold text-gray-700">
          {{ $t("tools.header.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("tools.header.detail") }}
        </p>
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
    <hr class="my-10 md:my-20" />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
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
