<template>
  <button :style="{ width: button_width }">{{ text }}</button>
</template>

<script>
export default {
  emits: ["getValue"],
  props: {
    text: {
      type: String,
      required: true,
    },
    button_width: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value(value) {
      this.$emit("getValue", value);
    },
  },
};
</script>

<style scoped>
button {
  border: 2px solid #e8e8e8;
  padding: 1rem 1rem;
  border-radius: 10px;
  background-color: #212121;
  font-size: small;
  font-weight: bold;
  color: #e8e8e8;
  cursor: pointer;
}
button:hover {
  outline-color: white;
  background-color: #212121;
  color: #e8e8e8;
  box-shadow: 5px 5px #888888;
}
</style>
