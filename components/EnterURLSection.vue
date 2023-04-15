<template>
  <div class="align-mid">
    <h2>Enter URL</h2>
    <div>
      <InputField
        input_type="url"
        placeholder_text="Enter domain or URL"
        input_width="20rem"
      ></InputField>
      <ClickButton text="Check broken links"></ClickButton>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.align-mid {
  display: grid;
  place-items: center;
}
h2 {
  margin-top: 3rem;
}
.align-mid div {
  margin-top: 2rem;
  display: flex;
  gap: 0 1rem;
}
</style>
