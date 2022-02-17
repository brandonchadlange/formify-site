<template>
  <div class="grid-cols-1 md:grid md:grid-cols-2 md:gap-16">
    <div>
      <h1 class="text-2xl md:text-5xl font-semibold text-white">
        {{ $t(translationKey + ".header.title") }}
      </h1>
      <p class="text-xl md:text-3xl mt-8 font-light text-white">
        {{ $t(translationKey + ".header.detail") }}
      </p>
      <button
        class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
      >
        {{ $t(translationKey + ".header.cta.start") }}
      </button>
    </div>
    <div class="justify-center hidden md:flex">
      <div
        class="p-8 rounded-full bg-white bg-opacity-30 w-40 h-40 md:w-80 md:h-80 flex flex-col items-center justify-center"
      >
        <img
          class="object-contain relative left-6 scale-110"
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
