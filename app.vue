<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
* {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  color: white;
}
html {
  background-color: #161616;
  overflow-x: hidden;
}
h1 {
  font-size: 3.5rem;
  font-weight: 900;
}
h2 {
  font-size: 2rem;
  font-weight: 900;
}
@media (max-width: 1000px) {
  html {
    font-size: 13px;
  }
}
</style>
