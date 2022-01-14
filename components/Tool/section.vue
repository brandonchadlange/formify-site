<template>
  <div class="md:grid md:grid-cols-2 md:gap-16">
    <div>
      <h3 class="text-pink-500 font-semibold text-sm">
        {{ $t(`${translationKey}.keyword`) }}
      </h3>
      <h1 class="text-2xl md:text-5xl font-semibold text-gray-700 mt-8">
        {{ $t(`${translationKey}.title`) }}
      </h1>
      <hr class="mt-4 border-4 border-pink-500 w-1/3" />
      <p class="mt-8 font-light text-gray-600">
        {{ $t(`${translationKey}.detail`) }}
      </p>
    </div>
    <img class="shadow-md" :src="image" alt="" />
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
