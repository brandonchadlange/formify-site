<template>
  <div>
    <PageSection
      translationKey="notifications"
      image="/img/tools/icons/notifications.png"
    />
    <!-- <div class="md:grid md:grid-cols-2 md:gap-16 flex items-center">
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          {{ $t("notifications.header.title") }}
        </h1>
        <p class="text-xl md:text-3xl mt-8 font-light text-gray-500">
          {{ $t("notifications.header.detail") }}
        </p>
        <button
          class="px-6 py-3 text-xl bg-pink-500 border-2 border-pink-500 shadow-md text-white rounded-sm mt-8"
        >
          {{ $t("notifications.header.cta.start") }}
        </button>
      </div>
      <div class="flex justify-center">
        <div class="p-8 rounded-full bg-gray-200 w-80 h-80">
          <img
            class="w-96 h-96 object-contain -translate-y-16 absolute"
            src="~/assets/img/tools/icons/notifications.png"
            alt="notifications tool icon"
          />
        </div>
      </div>
    </div> -->
    <PageContainer>
      <ToolSection
        translationKey="notifications.contentManagement"
        image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
      >
        <div class="bg-pink-400 rounded-2xl">
          <img
            class="h-80 object-contain scale-125"
            src="/img/pages/tools/blog-builder/content-management.png"
            alt=""
          />
        </div>
      </ToolSection>
    </PageContainer>
    <PageContainer>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-16">
        <div>
          <div class="h-12 w-12 bg-gray-200 p-2">
            <Icon icon="bell" />
          </div>
          <div class="mt-4 text-2xl">Push Messages</div>
          <p class="mt-2 font-light leading-snug">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In aut,
            dicta obcaecati eos quos nemo modi optio nesciunt molestias
            explicabo ab eius provident ipsum amet illum reiciendis velit error
            enim.
          </p>
        </div>
        <div>
          <div class="h-12 w-12 bg-gray-200 p-2">
            <Icon icon="mail" />
          </div>
          <div class="mt-4 text-2xl">Email</div>
          <p class="mt-2 font-light leading-snug">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In aut,
            dicta obcaecati eos quos nemo modi optio nesciunt molestias
            explicabo ab eius provident ipsum amet illum reiciendis velit error
            enim.
          </p>
        </div>
        <div>
          <div class="h-12 w-12 bg-gray-200 p-2">
            <Icon icon="phone" />
          </div>
          <div class="mt-4 text-2xl">SMS</div>
          <p class="mt-2 font-light leading-snug">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In aut,
            dicta obcaecati eos quos nemo modi optio nesciunt molestias
            explicabo ab eius provident ipsum amet illum reiciendis velit error
            enim.
          </p>
        </div>
      </div>
    </PageContainer>
    <PageContainer>
      <ToolSection
        translationKey="notifications.seo"
        image="https://image.freepik.com/free-vector/flat-design-cms-transparent-screen-with-apps_23-2148790015.jpg"
      >
        <img src="" alt="" />
      </ToolSection>
    </PageContainer>
    <PageContainer class="bg-gray-600">
      <div class="max-w-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <PageSubHeading class="md:text-3xl font-semibold text-white mt-4">
          What would you do with all this power?
        </PageSubHeading>
        <PageText class="text-white">
          {{ $t(`notifications.contentManagement.detail`) }}
        </PageText>
        <hr class="mt-4 border-2 border-pink-500 w-1/3" />
      </div>
      <div class="flex mt-20">
        <div class="h-80 w-3/5 bg-pink-500 rounded-2xl shadow-md z-10 p-8">
          <div class="col-span-6 max-w-md">
            <h3 class="text-white font-semibold text-md">
              {{ $t(`notifications.contentManagement.keyword`) }}
            </h3>
            <PageSubHeading class="md:text-3xl font-semibold text-white mt-4">
              {{ $t(`notifications.contentManagement.title`) }}
            </PageSubHeading>
            <PageText>
              {{ $t(`notifications.contentManagement.detail`) }}
            </PageText>
          </div>
        </div>
        <div class="h-80 w-3/5 bg-white rounded-2xl shadow-md -ml-20 -mt-10">
          <img
            src="/img/pages/home/app-screenshot.png"
            class="h-full w-full object-cover rounded-2xl object-top"
            alt=""
          />
        </div>
      </div>
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
    <PageContainer class="bg-pink-500">
      <div class="flex items-center justify-center">
        <div class="text-center max-w-lg">
          <h1 class="text-2xl md:text-5xl font-semibold text-white">
            {{ $t("notifications.cta.title") }}
          </h1>
          <p class="text-xl md:text-3xl mt-8 font-light text-white">
            {{ $t("notifications.cta.detail") }}
          </p>
          <button
            class="px-6 py-3 text-xl bg-gray-700 border-2 border-gray-700 shadow-md text-white rounded-sm mt-8"
          >
            {{ $t("notifications.cta.button") }}
          </button>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script>
export default {
  head: {
    title: "Notifications | Keep your users informed",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Create targeted messages and notifications in order to keep your customers informed.",
      },
    ],
  },
};
</script>
