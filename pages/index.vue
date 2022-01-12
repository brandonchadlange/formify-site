<template>
  <div class="mt-10">
    <div class="mt-16 max-w-6xl m-auto grid grid-cols-2 gap-16">
      <div>
        <h1 class="text-2xl md:text-5xl font-semibold text-gray-700">
          Why be busy when you can be productive?
        </h1>
        <h2 class="text-xl md:text-3xl mt-4 font-light text-gray-500">
          Explore our fully featured web components and add new features to your
          site in minutes!
        </h2>
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
    <div class="mt-16 bg-white p-10">
      <div class="max-w-6xl m-auto py-20">
        <h1
          class="text-2xl md:text-5xl font-semibold text-gray-700 text-center"
        >
          Coming Soon!
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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
