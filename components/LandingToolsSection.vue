<template>
  <div>
    <h2>🛠️ Featured tools:</h2>
    <div class="sub-heading">
      <p>which were used by</p>
      <count-up-component
        ref="myCounter"
        :end-val="counterValue"
        :options="counterOptions"
        duration="3"
      ></count-up-component>

      <p>people</p>
    </div>
    <NuxtLink class="tool-container" to="/coming-soon">
      <div>
        <h3>Website word counter</h3>
        <svg
          width="16"
          height="14"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.39836 1.03621C7.41836 0.816208 7.25622 0.621643 7.03621 0.601642L3.451 0.275714C3.23099 0.255713 3.03643 0.41785 3.01643 0.637857C2.99643 0.857864 3.15856 1.05243 3.37857 1.07243L6.56543 1.36214L6.27571 4.549C6.25571 4.76901 6.41785 4.96357 6.63786 4.98357C6.85786 5.00357 7.05243 4.84144 7.07243 4.62143L7.39836 1.03621ZM1.25607 6.30729L7.25607 1.30729L6.74393 0.692711L0.743926 5.69271L1.25607 6.30729Z"
            fill="white"
          />
        </svg>
      </div>
      <div style="font-size: 0.9rem">
        0
        <p> people used this tool</p>
      </div>
    </NuxtLink>
    <NuxtLink class="tool-container" to="/tools/broken-link-checker">
      <div>
        <h3>Broken link checker</h3>
        <svg
          width="16"
          height="14"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.39836 1.03621C7.41836 0.816208 7.25622 0.621643 7.03621 0.601642L3.451 0.275714C3.23099 0.255713 3.03643 0.41785 3.01643 0.637857C2.99643 0.857864 3.15856 1.05243 3.37857 1.07243L6.56543 1.36214L6.27571 4.549C6.25571 4.76901 6.41785 4.96357 6.63786 4.98357C6.85786 5.00357 7.05243 4.84144 7.07243 4.62143L7.39836 1.03621ZM1.25607 6.30729L7.25607 1.30729L6.74393 0.692711L0.743926 5.69271L1.25607 6.30729Z"
            fill="white"
          />
        </svg>
      </div>
      <div style="font-size: 0.9rem">
        0
        <p> people used this tool</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
import CountUpComponent from "vue-countup-v3";
import axios from "axios";
import { ref, onMounted } from "vue";

let counterValue = ref(0);
let counterOptions = { separator: "." };

function updateCounter(to) {
  counterValue.value = to;
}
onMounted(() => {
  axios
    .get(`https://api.witzdam.com/stats/tools-user-count`)
    .then((response) => {
      if (response.status === 200) {
        updateCounter(response.data.userCount);
      }
    })
    .catch((error) => {
      console.error(`Request failed due to: ${error}`);
    });
});
</script>
<style scoped>
.sub-heading {
  display: flex;
  gap: 5px;
  margin-bottom: 2rem;
}
.sub-heading p {
  opacity: 0.56;
}
.tool-container {
  background-color: #252525;
  border-radius: 1rem;
  padding: 1.15rem 1rem;
  max-width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: solid rgba(50, 50, 50, 0);
  transition: border-color 0.2s;
  cursor: pointer;
  margin-bottom: 1.5rem;
}
.tool-container:hover {
  border: solid rgba(50, 50, 50, 1);
}
.tool-container div {
  display: flex;
  align-items: center;
}
.tool-container div p {
  opacity: 0.56;
}
a {
  text-decoration: none;
}
@media (max-width: 1000px) {
  .tool-container {
    max-width: 100%;
  }
}
</style>
