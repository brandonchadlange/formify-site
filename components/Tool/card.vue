<template>
  <NuxtLink :to="'/tools/' + tool.key">
    <div class="bg-white shadow-md">
      <div class="bg-gray-200 text-white p-4 flex flex-col items-center">
        <img
          class="h-40 object-contain"
          :src="`/img/tools/icons/${tool.key}.png`"
          alt="blog"
        />
      </div>
      <div class="p-2 h-32">
        <div class="text-xl">
          {{ $t(`${tool.key}.card.title`) }}
        </div>
        <div class="text-sm font-light leading-tight">
          {{ $t(`${tool.key}.card.detail`) }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    tool: Object,
  },
};
</script>
