<template>
  <input
    :type="input_type"
    class="input"
    :placeholder="placeholder_text"
    :style="{ width: input_width }"
    v-model="value"
  />
</template>

<script>
export default {
  emits: ["getValue"],
  props: {
    input_type: {
      type: String,
      required: true,
    },
    placeholder_text: {
      type: String,
      required: true,
    },
    input_width: {
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
.input {
  border: 2px solid #e8e8e8;
  padding: 1rem 1rem;
  border-radius: 10px;
  background-color: #212121;
  font-size: small;
  font-weight: bold;
  color: #e8e8e8;
}
.input::placeholder {
  text-align: start;
}
.input:focus {
  outline-color: white;
  background-color: #212121;
  color: #e8e8e8;
  box-shadow: 5px 5px #888888;
}
</style>
