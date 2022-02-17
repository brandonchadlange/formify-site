<template>
  <div>
    <PageSection
      translationKey="blog-builder"
      image="/img/tools/icons/blog-builder.png"
    />
    <PageContainer>
      <ToolSection
        translationKey="blog-builder.contentManagement"
        image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
      >
        <img
          class="w-full"
          src="/img/pages/tools/blog-builder/content-management.png"
          alt=""
        />
      </ToolSection>
    </PageContainer>
    <PageContainer>
      <ToolSection translationKey="blog-builder.seo">
        <img src="/img/pages/platform/search-engine-optimisation.png" alt="" />
      </ToolSection>
    </PageContainer>
    <PageContainer>
      <div
        class="rounded-3xl flex shadow-md gap-x-8"
        style="background-image: url(/img/pages/platform/notifications-4.png)"
      >
        <div class="py-8 pl-10 flex flex-col justify-between gap-y-8">
          <div class="text-2xl md:text-3xl font-semibold text-white">
            Create your first blog post today
          </div>
          <div class="font-light text-white text-xl">
            Build robust applications using a comprehensive portfolio of
            compute, storage, database, and networking products.
          </div>
          <NuxtLink
            to="/platform"
            class="w-40 text-center px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 text-white rounded-lg shadow-md"
          >
            {{ $t("tools.header.cta.learn") }}
          </NuxtLink>
        </div>
        <div class="w-3/5 flex justify-end object-cover mt-20">
          <img
            class="object-cover"
            src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
            alt=""
          />
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script>
export default {
  head: {
    title: "Blog Builder | Add a Blog to your site in minutes",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Create powerful content and engage with your audience through a blog that can be customised for your every need.",
      },
    ],
  },
};
</script>
