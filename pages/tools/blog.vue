<template>
  <div class="my-20 max-w-6xl m-auto">
    <div class="md:grid md:grid-cols-2 md:gap-16 flex items-center">
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("blog.header.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("blog.header.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("blog.header.cta.start") }}
        </button>
        <button
          class="ml-4 px-6 py-3 text-xl bg-transparent border-2 border-gray-500 text-gray-500 rounded-sm mt-8"
        >
          {{ $t("blog.header.cta.learn") }}
        </button>
      </div>
      <div>
        <video
          muted
          autoplay
          class="rounded-full"
          src="https://d1gwm4cf8hecp4.cloudfront.net/videos/product-automation/header/Automation-hero.mp4"
        ></video>
      </div>
    </div>
    <hr class="my-16" />
    <ToolSection
      translationKey="blog.contentManagement"
      image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
    />
    <hr class="my-16" />
    <ToolSection
      translationKey="blog.seo"
      image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
    />
    <hr class="my-16" />
    <div class="flex items-center justify-center">
      <div class="text-center max-w-lg">
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("blog.cta.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("blog.cta.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("blog.cta.button") }}
        </button>
      </div>
    </div>
  </div>
</template>
