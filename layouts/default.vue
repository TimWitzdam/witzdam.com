<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/tools">Tools</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </nav>
    </header>
  </div>
  <slot></slot>
</template>
<script>
export default {};
</script>
<style scoped>
nav {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
a {
  opacity: 0.56;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: opacity 0.2s;
}
a:hover {
  opacity: 1;
}
.router-link-active {
  opacity: 1;
  background-color: #2e2e2e;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
