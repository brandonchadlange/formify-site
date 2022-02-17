<template>
  <div class="bg-white p-10">
    <div class="max-w-6xl m-auto py-0 md:py-20">
      <div class="grid grid-cols-10 gap-x-8 text-center md:text-left">
        <div class="col-span-10 block md:hidden mb-10">
          <img
            class="h-40 m-auto"
            src="/img/tools/icons/notifications.png"
            alt="Formify cloud platform"
          />
        </div>
        <div class="col-span-10 md:col-span-6">
          <div class="text-4xl md:text-6xl font-semibold text-gray-700 gap-x-8">
            {{ $t(translationKey + ".header.title") }}
            <!-- The only platform that you will ever need -->
          </div>
          <div
            class="mt-8 font-extralight text-gray-600 text-xl md:text-3xl leading-snug md:leading-tight"
          >
            <!-- Imagine you could monitor and control all of your sites from a
            single place. Well, now you can! Thanks to the Formify platform you
            will be able to analyse faults and track activity of all of your
            sites. -->
            {{ $t(translationKey + ".header.detail") }}
          </div>
          <button
            class="px-6 py-3 md:text-xl bg-pink-500 shadow-md text-white rounded-sm mt-8"
          >
            {{ $t("tools.header.cta.start") }}
          </button>
        </div>
        <div class="col-span-4 hidden md:block">
          <img :src="image" alt="Formify cloud platform" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    translationKey: String,
    image: String,
  },
};
</script>
