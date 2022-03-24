<template>
  <section :style="style" :class="color" class="p-10 h-screen bg-cover bg-center bg-no-repeat">
    <div class="max-w-6xl m-auto py-10">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pink: Boolean,
    white: Boolean,
    gray: Boolean,
    darkgray: Boolean,
    background: String
  },
  computed: {
    style() {
      let styles = {};

      if (this.background) {
        styles['background-image'] = `url('/img/general/hero/blog post.png')`
      }

      return styles;
    },
    color() {
      if (this.white) {
        return "bg-white text-gray-500";
      }

      if (this.pink) {
        return "bg-pink-500 text-white";
      }

      if (this.gray) {
        return "bg-gray-200";
      }

      if (this.darkgray) {
        return "bg-gray-700 text-white";
      }
    },
  },
};
</script>
