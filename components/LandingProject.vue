<template>
  <div class="project-wrapper">
    <img :src="'/' + imgName" :alt="imgAlt" />
    <div class="right">
      <p class="project-type">{{ projectType }}</p>
      <div>
        <NuxtLink :to="link">{{ name }}</NuxtLink>
        <svg
          width="18"
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
      <div class="tech-stack">
        <div
          class="technologies"
          v-for="(technology, index) in techStack"
          :key="index"
        >
          <p
            v-on:mouseover="showPopup($event, index)"
            @mouseleave="hidePopup(index)"
          >
            {{ technology.name }}
          </p>
          <div
            v-show="showPopups[index]"
            class="popup"
            :style="{ top: mouseY - 220 + 'px', left: mouseX + 'px' }"
            :key="index"
          >
            <h3>{{ technology.name }}</h3>
            <p>{{ technology.popupInfo.description }}</p>
            <p>Experience: {{ technology.popupInfo.experience }}</p>
            <p>Use cases:</p>
            <ul>
              <li v-for="useCase in technology.popupInfo.useCases">
                <span>{{ useCase }}</span>
              </li>
            </ul>
          </div>

          <span class="dot" v-show="index != techStack.length - 1"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps([
  "projectType",
  "name",
  "link",
  "imgName",
  "imgAlt",
  "techStack",
]);
let showPopups = ref([]);
let mouseX = ref(0);
let mouseY = ref(0);
function showPopup(event, index) {
  showPopups.value[index] = true;
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;

  // add event listener to update mouse position
  document.addEventListener("mousemove", updateMousePosition);
}
function updateMousePosition(event) {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
}
function hidePopup(index) {
  showPopups.value[index] = false;
  document.removeEventListener("mousemove", updateMousePosition);
}
onMounted(() => {
  for (let i; i < props.techStack.length; i++) {
    showPopups.value[i] = false;
  }
});
</script>
<style scoped>
.tech-stack {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.2rem;
}
.tech-stack p {
  opacity: 0.56;
}
.technologies {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.technologies p:hover {
  cursor: help;
}
.dot {
  height: 0.5rem;
  width: 0.5rem;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.56;
}
.project-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
.project-wrapper img {
  max-width: 5rem;
  border-radius: 50%;
}
.right {
  margin-left: 2rem;
}
.project-type {
  opacity: 0.56;
  margin-bottom: 0.5rem;
}
.right a {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}
.popup {
  position: absolute;
  background-color: #2e2e2e;
  border: 1px solid #353535;
  border-radius: 1rem;
  padding: 1.5rem;
  font-size: small;
  max-width: 15rem;
  z-index: 1;
}
.popup p,
ul {
  opacity: 0.56;
  margin-top: 0.3rem;
}
.popup li {
  margin-left: 1rem;
}
@media (max-width: 1000px) {
  .tech-stack {
    flex-wrap: wrap;
  }
}
</style>
