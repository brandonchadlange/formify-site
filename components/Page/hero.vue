<template>
  <div class="grid-cols-1 md:grid md:grid-cols-2 md:gap-16">
    <div>
      <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
        {{ $t(translationKey + ".header.title") }}
      </h1>
      <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
        {{ $t(translationKey + ".header.detail") }}
      </p>
      <button
        class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
      >
        {{ $t(translationKey + ".header.cta.start") }}
      </button>
    </div>
    <div class="justify-center hidden md:flex">
      <div class="p-8 rounded-full bg-gray-200 w-40 h-40 md:w-80 md:h-80">
        <img
          class="w-60 h-60 md:w-96 md:h-96 object-contain -translate-y-0 md:-translate-y-16 absolute"
          src="~/assets/img/tools/icons/blog.png"
          alt="blog tool icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    translationKey: String,
  },
};
</script>
