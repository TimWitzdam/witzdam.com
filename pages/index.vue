<template>
  <div>
    <LandingTopSection></LandingTopSection>
    <div class="middle-section">
      <LandingProjectsSection></LandingProjectsSection>
      <LandingToolsSection></LandingToolsSection>
    </div>
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
  gap: 0px 150px;
  justify-items: stretch;
}
@media (max-width: 1000px) {
  .middle-section {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    gap: 5rem 0px;
    grid-template-areas:
      "."
      ".";
    justify-items: stretch;
  }
}
</style>
