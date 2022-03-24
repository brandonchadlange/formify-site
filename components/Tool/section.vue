<template>
  <div class="md:grid md:grid-cols-10 md:gap-32">
    <div class="col-span-4" v-if="textPosition === 'right'">
      <slot></slot>
    </div>
    <div class="col-span-6 max-w-md">
      <h3 class="text-pink-500 font-semibold text-md">
        {{ $t(`${translationKey}.keyword`) }}
      </h3>
      <PageSubHeading class="md:text-3xl font-semibold text-gray-700 mt-8">
        {{ $t(`${translationKey}.title`) }}
      </PageSubHeading>
      <hr class="mt-4 border-1 border-pink-500 w-1/3" />
      <Text-Body class="mt-4">
        {{ $t(`${translationKey}.detail`) }}
      </Text-Body>
    </div>
    <div class="col-span-4" v-if="!textPosition || textPosition === 'left'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    translationKey: String,
    image: String,
    textPosition: String,
  },
};
</script>
