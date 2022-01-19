<template>
  <div class="my-20 max-w-6xl m-auto">
    <div class="md:grid md:grid-cols-2 md:gap-16 flex items-center">
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("notifications.header.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("notifications.header.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("notifications.header.cta.start") }}
        </button>
      </div>
      <div class="flex justify-center">
        <div class="p-8 rounded-full bg-gray-200 w-80 h-80">
          <img
            class="w-96 h-96 object-contain -translate-y-16 absolute"
            src="~/assets/img/tools/icons/notifications.png"
            alt="notifications tool icon"
          />
        </div>
      </div>
    </div>
    <hr class="my-16" />
    <ToolSection
      translationKey="notifications.contentManagement"
      image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
    />
    <hr class="my-16" />
    <ToolSection
      translationKey="notifications.seo"
      image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
    />
    <hr class="my-16" />
    <div class="flex items-center justify-center">
      <div class="text-center max-w-lg">
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("notifications.cta.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("notifications.cta.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("notifications.cta.button") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Notifications | Keep your users informed",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Create targeted messages and notifications in order to keep your customers informed.",
      },
    ],
  },
};
</script>
