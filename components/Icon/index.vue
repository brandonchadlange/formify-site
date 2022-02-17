<template>
  <img class="h-full w-full object-contain" :src="`/img/icons/${icon}.png`" />
</template>

<script>
export default {
  props: {
    icon: String,
  },
};
</script>
