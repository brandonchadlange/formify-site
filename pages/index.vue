<template>
  <div>
    <PageContainer>
      <div class="md:grid md:grid-cols-2">
        <div>
          <PageHeading>Why be busy when you can be productive?</PageHeading>
          <PageText>
            Explore the worlds most comprehensive development platform and add
            features to your site in minutes with fully customisable web
            components.
          </PageText>
        </div>
        <div class="flex flex-col gap-y-4">
          <div class="font-semibold text-gray-600">
            Welcome to Formify. Sign up to get started!
          </div>
          <input
            class="p-2 text-xl w-full border border-gray-400 rounded-md shadow-md outline-none"
            type="text"
            placeholder="First name"
          />
          <input
            class="p-2 text-xl w-full border border-gray-400 rounded-md shadow-md outline-none"
            type="text"
            placeholder="Email"
          />
          <input
            class="p-2 text-xl w-full border border-gray-400 rounded-md shadow-md outline-none"
            type="text"
            placeholder="Password"
          />
          <div class="grid grid-cols-5 mt-4 gap-x-4">
            <ButtonPrimary class="col-span-3">Start building</ButtonPrimary>
            <ButtonPrimary class="col-span-1 bg-gray-700"></ButtonPrimary>
            <ButtonPrimary class="col-span-1"></ButtonPrimary>
          </div>
        </div>
      </div>
    </PageContainer>
    <PageContainer class="bg-white">
      <PageSubHeading>What is Formify?</PageSubHeading>
      <PageText>
        Formify is a platform built for developers and project owners to
        collaborate and speed up development using customisable pre-built
        components and detailed site analysis.
      </PageText>
    </PageContainer>
    <PageContainer class="bg-white">
      <div class="h-96 w-4/5 bg-white rounded-2xl shadow mx-auto">
        <img
          src="/img/pages/home/app-screenshot.png"
          class="h-full w-full object-cover rounded-2xl object-top"
          alt=""
        />
      </div>
    </PageContainer>
    <PageSection
      translationKey="platform"
      image="/img/pages/home/platform.png"
    />
    <div class="p-10">
      <div class="max-w-6xl m-auto py-20">
        <div class="grid grid-cols-10 gap-x-8">
          <div class="col-span-6">
            <div
              class="text-2xl md:text-7xl font-semibold text-gray-700 gap-x-8"
            >
              Develop faster with customisable tools built for your every need
            </div>
            <div class="mt-8 font-light text-gray-600 text-2xl">
              Development takes time, time takes money, why not settle for a
              solution that solves those issues? Formify was built with your
              time and wallet in mind in order to give you the most seamless
              experience and fastest time to market.
            </div>
            <button
              class="px-6 py-3 text-xl bg-pink-500 shadow-md text-white rounded-sm mt-8"
            >
              {{ $t("tools.header.cta.start") }}
            </button>
            <NuxtLink
              to="/platform"
              class="ml-4 px-6 py-3 text-xl bg-gray-700 text-gray-300 rounded-sm mt-8 shadow-md"
            >
              {{ $t("tools.header.cta.learn") }}
            </NuxtLink>
          </div>
          <div class="col-span-4">
            <img
              src="img/pages/home/tools.png"
              alt="collection of Formify tools"
            />
          </div>
        </div>
      </div>
    </div>
    <PageSection
      translationKey="integration"
      image="/img/pages/home/integration.png"
    />

    <!-- <div
      class="p-10 bg-gray-200"
      style="background-image: url(img/pages/platform/notifications-4.png)"
    >
      <div class="max-w-6xl m-auto py-20">
        <div class="grid grid-cols-10 gap-x-8">
          <div class="col-span-7">
            <div class="text-2xl md:text-7xl font-semibold text-white gap-x-8">
              Don't compromise on the services that you want to use
            </div>
            <div class="mt-8 font-light text-white text-2xl">
              with a wide selection of integrations, you should find the best
              ways to manage your solutions.
            </div>
            <button
              class="px-6 py-3 text-xl bg-pink-500 shadow-md text-white rounded-sm mt-8"
            >
              {{ $t("tools.header.cta.start") }}
            </button>
            <NuxtLink
              to="/platform"
              class="ml-4 px-6 py-3 text-xl bg-gray-700 border-2 border-gray-700 text-white rounded-sm mt-8 shadow-md"
            >
              {{ $t("tools.header.cta.learn") }}
            </NuxtLink>
          </div>
          <div class="col-span-3">
            <img
              src="img/pages/home/integration.png"
              alt="puzzle pieces to represent integration"
            />
          </div>
        </div>
      </div>
    </div> -->
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
