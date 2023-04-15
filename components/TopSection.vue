<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="sub-title-container">
      <p>{{ subTitle }}</p>
    </div>
    <div class="description-container"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
    },
  },
};
</script>
<style scoped>
.sub-title-container {
  opacity: 0.56;
}
</style>
