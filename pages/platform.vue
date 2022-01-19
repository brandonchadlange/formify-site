<template>
  <div class="mt-8">
    <PageContainer>
      <PageHero translationKey="platform" />
    </PageContainer>
    <hr class="my-16" />
    <PageContainer>
      <!-- <PageHero /> -->
    </PageContainer>
  </div>
</template>

<script>
export default {
  head: {
    title: "Platform | Formify Web Management Portal",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The Formify platform is a space for you to register, analyse and take control of your site with the built in tools and services.",
      },
    ],
  },
};
</script>
