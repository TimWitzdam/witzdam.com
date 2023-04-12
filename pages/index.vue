<template>
  <div>
    <LandingTopSection></LandingTopSection>
    <div class="middle-section">
      <LandingProjectsSection></LandingProjectsSection>
      <LandingToolsSection></LandingToolsSection>
    </div>
    <LandingContactSection></LandingContactSection>
  </div>
  <p>{{ renderTime }} ms render time</p>
</template>
<script>
export default {
  data() {
    return {
      renderTime: null,
    };
  },
  created() {
    const startTime = performance.now();
    this.$nextTick(() => {
      const endTime = performance.now();
      this.renderTime = (endTime - startTime).toFixed(1);
    });
  },
};
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
    gap: 5rem 0px;
    grid-template-areas:
      "."
      ".";
    justify-items: stretch;
  }
}
</style>
