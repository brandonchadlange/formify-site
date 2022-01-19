<template>
  <div class="my-20 max-w-6xl m-auto">
    <div class="md:grid md:grid-cols-2 md:gap-16 flex items-center">
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("pop-ups.header.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("pop-ups.header.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("pop-ups.header.cta.start") }}
        </button>
      </div>
      <div class="flex justify-center">
        <div class="p-8 rounded-full bg-gray-200 w-80 h-80">
          <img
            class="w-96 h-96 object-contain -translate-y-16 absolute"
            src="img/tools/icons/pop-ups.png"
            alt="pop-ups tool icon"
          />
        </div>
      </div>
    </div>
    <hr class="my-16" />
    <ToolSection
      translationKey="pop-ups.contentManagement"
      image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
    />
    <hr class="my-16" />
    <ToolSection
      translationKey="pop-ups.seo"
      image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
    />
    <hr class="my-16" />
    <div class="flex items-center justify-center">
      <div class="text-center max-w-lg">
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("pop-ups.cta.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("pop-ups.cta.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("pop-ups.cta.button") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Pop Ups | Keep users focused and engaged",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Get your point across with pop up windows designed to keep your customers focused and engaged.",
      },
    ],
  },
};
</script>
