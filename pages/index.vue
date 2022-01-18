<template>
  <div>
    <div
      class="mt-8 md:mt-32 max-w-6xl m-auto md:grid md:grid-cols-2 md:gap-16"
    >
      <div>
        <h1 class="text-3xl md:text-5xl font-semibold text-gray-700">
          Why be busy when you can be productive?
        </h1>
        <h2 class="text-xl md:text-3xl mt-4 font-light text-gray-500">
          Explore fully featured web components and add new features to your
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
        <div class="grid grid-cols-10">
          <div class="col-span-7">
            <div
              class="text-2xl md:text-7xl font-semibold text-gray-700 gap-x-8"
            >
              Deploy faster with customisable tools built for your every need
            </div>
            <div class="mt-8 font-light text-gray-600 text-2xl">
              Development takes time, time takes money, why not settle for a
              solution that solves those issues? Formify was built with your
              time and wallet in mind in order to give you the most seamless
              experience and fastest time to market.
            </div>
          </div>
          <div class="col-span-3">
            <img
              src="https://media.istockphoto.com/vectors/isometric-illustration-with-a-laptop-men-and-women-working-on-web-vector-id1096969570?k=20&m=1096969570&s=612x612&w=0&h=tjjNz68OHe8Oor_pknW2ZsKfKz-FUy3tQD-B-vYq8hg="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-10">
      <div class="max-w-6xl m-auto py-20">
        <div class="grid grid-cols-10">
          <div class="col-span-7">
            <div
              class="text-2xl md:text-7xl font-semibold text-gray-700 gap-x-8"
            >
              Don't compromise on the services that you want to use
            </div>
            <div class="mt-8 font-light text-gray-600 text-2xl">
              with a wide selection of integrations, you should find the best
              ways to manage your solutions.
            </div>
          </div>
          <div class="col-span-3">
            <img
              src="https://media.istockphoto.com/vectors/isometric-illustration-with-a-laptop-men-and-women-working-on-web-vector-id1096969570?k=20&m=1096969570&s=612x612&w=0&h=tjjNz68OHe8Oor_pknW2ZsKfKz-FUy3tQD-B-vYq8hg="
              alt=""
            />
          </div>
        </div>
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
