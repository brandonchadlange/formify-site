<template>
  <div class="my-20 max-w-6xl m-auto">
    <div class="md:grid md:grid-cols-2 md:gap-16 flex items-center">
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("media-uploader.header.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("media-uploader.header.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("media-uploader.header.cta.start") }}
        </button>
      </div>
      <div class="flex justify-center">
        <div class="p-8 rounded-full bg-gray-200 w-80 h-80">
          <img
            class="w-96 h-96 object-contain -translate-y-16 absolute skew-x-2"
            src="~/assets/img/tools/icons/media-uploader.png"
            alt="media upload to cloud icon"
          />
        </div>
      </div>
    </div>
    <hr class="my-16" />
    <ToolSection translationKey="media-uploader.storage">
      <div class="grid grid-cols-3 gap-4">
        <div>
          <div class="bg-white rounded-2xl p-4 shadow-md">
            <img
              class="h-20 object-contain mx-auto"
              src="/img/pages/tools/media-uploader/providers/google-drive.png"
              alt=""
            />
          </div>
          <div class="text-center mt-2 font-semibold text-gray-500">
            Google Drive
          </div>
        </div>
        <div>
          <div class="bg-white rounded-2xl p-4 shadow-md">
            <img
              class="h-20 object-contain mx-auto"
              src="/img/pages/tools/media-uploader/providers/dropbox.png"
              alt=""
            />
          </div>
          <div class="text-center mt-2 font-semibold text-gray-500">
            Dropbox
          </div>
        </div>
        <div>
          <div class="bg-white rounded-2xl p-4 shadow-md">
            <img
              class="h-20 object-contain mx-auto"
              src="/img/pages/tools/media-uploader/providers/s3-bucket.png"
              alt=""
            />
          </div>
          <div class="text-center mt-2 font-semibold text-gray-500">
            S3 Bucket
          </div>
        </div>
        <div>
          <div class="bg-white rounded-2xl p-4 shadow-md">
            <img
              class="h-20 object-contain mx-auto"
              src="/img/pages/tools/media-uploader/providers/azure-blob-storage.png"
              alt=""
            />
          </div>
          <div
            class="text-center mt-2 font-semibold text-gray-500 leading-none"
          >
            Azure Blob Storage
          </div>
        </div>
      </div>
    </ToolSection>
    <hr class="my-16" />
    <div class="flex items-center justify-center">
      <div class="text-center max-w-lg">
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("media-uploader.cta.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("media-uploader.cta.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("media-uploader.cta.button") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Media Uploader | Share documents and files through any provider",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Add a fully customisable media uploader to your site and hook it up to any cloud solution or your own server.",
      },
    ],
  },
};
</script>
