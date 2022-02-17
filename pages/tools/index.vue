<template>
  <div>
    <PageContainer>
      <PageSubHeading>{{ $t("tools.header.title") }}</PageSubHeading>
      <PageText>{{ $t("tools.header.detail") }}</PageText>
    </PageContainer>
    <PageContainer>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ToolCard v-for="tool in tools" :key="tool.key" :tool="tool" />
      </div>
    </PageContainer>
  </div>
</template>

<script>
export default {
  head: {
    title: "Tools | Formify Rapid Development Tools",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Develop faster with an existing set of tools instead of creating your own from scratch.",
      },
    ],
  },
  data() {
    return {
      tools: require("../../data/tools.json"),
    };
  },
};
</script>
