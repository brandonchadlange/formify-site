<template>
  <div
    id="navbar"
    class="w-full bg-white shadow-lg py-3 fixed left-0 top-0 z-50"
  >
    <div
      id="navbar-content"
      class="max-w-6xl flex justify-between items-center m-auto"
    >
      <NuxtLink to="/" class="flex gap-x-4">
        <img class="h-12" src="/img/icon-transparent.png" alt="" />
        <div id="home" class="font-primary text-4xl text-pink-500">Formify</div>
      </NuxtLink>
      <HeaderSideBar />
      <HeaderNavLinks />
    </div>
  </div>
</template>
