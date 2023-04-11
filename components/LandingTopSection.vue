<template>
  <div>
    <h1>👋 Hey I'm Tim</h1>
    <div class="propeties-container">
      <span class="emoji">⚙️</span>
      <p>Backend Dev</p>
      <span class="dot"></span>
      <span class="emoji">👨‍💻</span>
      <p>Frontend Dev</p>
      <span class="dot"></span>
      <span class="emoji">🧑‍🎨</span>
      <p>UI/UX Designer</p>
      <span class="dot"></span>
      <span class="emoji">🧠</span>
      <p>Student</p>
    </div>
    <div class="description-container">
      <img src="/memoji.webp" alt="" />
      <div class="description">
        <p>
          I'm Tim Witzdam, a full time student from Germany who also loves
          building cool things using code.
        </p>
        <div class="description-links">
          <a href="mailto:tim@witzdam.com">
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
            Email me</a
          ><NuxtLink to="/tools">
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
            Useful tools</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  font-size: 3.5rem;
}
.propeties-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.propeties-container p {
  opacity: 0.56;
}
.dot {
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.56;
}
img {
  max-width: 9rem;
  margin-left: -2rem;
}
.description-container {
  display: flex;
  align-items: center;
}
.description {
  max-width: 25rem;
}
.description p {
  margin-bottom: 1.5rem;
}
.description a {
  margin-right: 2rem;
  opacity: 0.56;
  transition: opacity 0.2s;
  text-decoration: none;
  margin-left: 0.4rem;
}
.description a:hover {
  opacity: 1;
}
.description-links {
  display: flex;
  align-items: center;
}
</style>
