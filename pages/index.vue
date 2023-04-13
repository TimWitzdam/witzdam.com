<template>
  <div>
    <Head>
      <Title>Tim Witzdam</Title>
      <Meta
        name="description"
        content="Hi, I'm Tim Witzdam, a full time student from Germany who also loves
          building cool things using code."
      />
    </Head>
    <LandingTopSection></LandingTopSection>
    <div class="middle-section">
      <LandingProjectsSection></LandingProjectsSection>
      <LandingToolsSection></LandingToolsSection>
    </div>
    <LandingContactSection></LandingContactSection>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.middle-section {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 0px 120px;
  justify-items: stretch;
}
@media (max-width: 1000px) {
  .middle-section {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    gap: 3.5rem 0px;
    grid-template-areas:
      "."
      ".";
    justify-items: stretch;
  }
}
</style>
