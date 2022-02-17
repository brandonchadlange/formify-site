<template>
  <div>
    <PageSection
      translationKey="platform"
      image="/img/pages/home/platform.png"
    />
    <PageContainer>
      <ToolSection translationKey="platform.content">
        <img src="/img/pages/platform/content-management.png" alt="" />
      </ToolSection>
    </PageContainer>
    <PageContainer>
      <ToolSection translationKey="platform.funnels" textPosition="right">
        <img src="/img/pages/platform/funnels.png" alt="" />
      </ToolSection>
    </PageContainer>
    <PageContainer>
      <ToolSection translationKey="platform.abTesting">
        <img src="/img/pages/platform/a-b-testing.png" alt="" />
      </ToolSection>
    </PageContainer>
    <PageContainer>
      <ToolSection translationKey="platform.monitoring" textPosition="right">
        <img src="/img/pages/platform/error-monitoring.png" alt="" />
      </ToolSection>
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
