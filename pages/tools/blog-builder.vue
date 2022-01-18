<template>
  <div class="my-20 max-w-6xl m-auto">
    <div class="md:grid md:grid-cols-2 md:gap-16 flex items-center">
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("blog-builder.header.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("blog-builder.header.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("blog-builder.header.cta.start") }}
        </button>
        <button
          class="ml-4 px-6 py-3 text-xl bg-transparent border-2 border-gray-500 text-gray-500 rounded-sm mt-8"
        >
          {{ $t("blog-builder.header.cta.learn") }}
        </button>
      </div>
      <div class="flex justify-center">
        <div class="p-8 rounded-full bg-gray-200 w-80 h-80">
          <img
            class="w-96 h-96 object-contain -translate-y-16 absolute"
            src="~/assets/img/tools/icons/blog.png"
            alt="blog tool icon"
          />
        </div>
      </div>
    </div>
    <hr class="my-16" />
    <ToolSection
      translationKey="blog-builder.contentManagement"
      image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
    />
    <hr class="my-16" />
    <ToolSection
      translationKey="blog-builder.seo"
      image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
    />
    <hr class="my-16" />
    <div class="flex items-center justify-center">
      <div class="text-center max-w-lg">
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("blog-builder.cta.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("blog-builder.cta.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("blog-builder.cta.button") }}
        </button>
      </div>
    </div>
  </div>
</template>
