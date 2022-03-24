<template>
  <div>
    <PageContainer class="backdrop-blur-xl bg-gray-700">
      <div>
        <div class="max-w-3xl mx-auto text-center">
          <!-- <div class="absolute left-0 top-20">
            <img
              src="/img/icons/cog-white.png"
              class="h-24 relative animate-spin-slow"
              alt=""
            />
            <img
              src="/img/icons/cog-pink.png"
              class="h-32 relative animate-reverse-spin-slow"
              alt=""
            />
            <img
              src="/img/icons/cog-blue.png"
              class="h-40 relative -left-24 -mt-6 animate-spin-slow"
              alt=""
            />
          </div>-->
          <!-- <div class="absolute right-0 top-0 -mr-20">
            <img
              src="/img/icons/cog-white.png"
              class="h-32 z-0 relative animate-spin-slow"
              alt=""
            />
          </div>-->
          <h1 class="z-10 relative text-8xl font-bold text-white leading-none">
            Why be busy when you can be
            <span
              class="text-pink-500 font-primary font-light"
            >productive</span>?
          </h1>
          <TextBody class="relative mt-10 z-10 text-white text-xl">
            Explore the worlds most comprehensive development platform and add
            features to your site in minutes with fully customisable web
            components.
          </TextBody>
          <div class="relative flex gap-x-4 justify-center">
            <NuxtLink
              to="/platform"
              class="ml-4 px-6 py-3 text-lg flex bg-gray-800 text-white rounded-md mt-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mt-1 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="ml-2 mt-1">Sign up with Email</span>
            </NuxtLink>
            <NuxtLink
              to="/platform"
              class="ml-4 px-6 py-3 text-lg flex bg-pink-500 text-white rounded-md mt-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 24"
                enable-background="new 0 0 22 24"
                class="h-7 w-7 mt-1 text-white"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="currentColor"
                  d="M11.2 10.4v3.8h6.2c-.3 1.6-1.9 4.7-6.2 4.7-3.8 0-6.8-3.1-6.8-6.9s3.1-6.9 6.8-6.9c2.1 0 3.6.9 4.4 1.7l3-2.9C16.7 2.1 14.2 1 11.2 1 5.1 1 .2 5.9.2 12s4.9 11 11 11c6.3 0 10.6-4.5 10.6-10.7 0-.7-.1-1.3-.2-1.8H11.2z"
                />
              </svg>
              <span class="ml-2 mt-1">Sign up with Google</span>
            </NuxtLink>
          </div>
        </div>
        <img class="z-0 -mt-44 w-full" src="/img/general/grid.png" alt />
      </div>
    </PageContainer>
    <PageSection white>
      <div class="grid grid-cols-4 gap-x-10">
        <div class="w-40">
          <TextAccent class="font-bold text-pink-500">8</TextAccent>
          <TextBody>Customisable Web Components</TextBody>
        </div>
        <div class="w-40">
          <TextAccent class="font-bold text-pink-500">120</TextAccent>
          <TextBody>Registered And Active Daily Users</TextBody>
        </div>
        <div class="w-40">
          <TextAccent class="font-bold text-pink-500">400</TextAccent>
          <TextBody>Data Collections Created To Date</TextBody>
        </div>
        <div class="w-40">
          <TextAccent class="font-bold text-pink-500">5,000</TextAccent>
          <TextBody>Data Records Transacted Daily</TextBody>
        </div>
      </div>
    </PageSection>
    <PageSection white class="pt-0">
      <div class="max-w-xl">
        <TextSubHeading class="font-semibold">What would you do with all this power?</TextSubHeading>
        <PageText>{{ $t(`notifications.contentManagement.detail`) }}</PageText>
      </div>
      <div class="flex mt-20">
        <div class="h-80 w-3/5 bg-pink-500 rounded-2xl shadow-md z-10 p-8">
          <div class="col-span-6 max-w-md flex flex-col justify-between">
            <h3
              class="text-white font-semibold text-md"
            >{{ $t(`notifications.contentManagement.keyword`) }}</h3>
            <PageSubHeading
              class="md:text-3xl font-semibold text-white mt-4"
            >{{ $t(`notifications.contentManagement.title`) }}</PageSubHeading>
            <PageText class="text-white">{{ $t(`notifications.contentManagement.detail`) }}</PageText>
          </div>
        </div>
        <div class="h-80 w-3/5 bg-white rounded-2xl shadow-md -ml-20 -mt-10">
          <img
            src="/img/pages/home/app-screenshot.png"
            class="h-full w-full object-cover rounded-2xl object-top"
            alt
          />
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script>
export default {
  head: {
    title: "Formify - The flexibility your site needs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Quickly add new and exciting features to your website without needing to know how to code!",
      },
    ],
  },
};
</script>
