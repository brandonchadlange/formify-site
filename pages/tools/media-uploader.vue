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
      <div class="grid grid-cols-6 gap-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/AWS_Simple_Icons_Storage_Amazon_S3.svg/1024px-AWS_Simple_Icons_Storage_Amazon_S3.svg.png"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/3lmzp7rq9ytt/2GfvIyMz5Dd99vje52s3Gg/533b0b337103dfe3783733ab168584da/azure-storage-blob--v1.png"
          alt=""
        />
        <img
          src="https://help.sap.com/doc/PRODUCTION/8b8d6fffe113457094a17701f63e3d6a/GIGYA/en-US/loio41289de270b21014bbc5a10ce4041860_LowRes.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/1101px-Dropbox_Icon.svg.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg/2560px-Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg.png"
          alt=""
        />
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
