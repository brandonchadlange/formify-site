<template>
  <PageSection pink background="blog-post" class="flex flex-col items-center justify-center">
    <div
      class="bg-gray-800 p-12 max-w-3xl text-center bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-sm shadow-gray-900 border-4 border-white border-b-pink-500 border-r-pink-500"
    >
      <h1 class="z-10 relative text-6xl font-bold text-white leading-none">
        Why be busy when you can be
        <span class="text-pink-500 font-primary font-light">productive</span>?
      </h1>
      <TextBody class="text-xl mt-8">
        Explore the worlds most comprehensive development platform and add
        features to your site in minutes with fully customisable web
        components.
      </TextBody>
      <div class="flex gap-x-4 justify-center">
        <NuxtLink
          to="/platform"
          class="ml-4 px-6 py-3 text-lg flex bg-gray-900 text-white rounded-md mt-8"
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
  </PageSection>
</template>
