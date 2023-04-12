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
  <main>
    <slot></slot>
  </main>
  <footer>
    <p>⚡ {{ renderTime }} ms render time</p>
  </footer>
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
main {
  max-width: 1000px;
  margin: 5rem auto 0 auto;
}
footer {
  position: absolute;
  width: 100%;
  display: grid;
  place-items: center;
  opacity: 0.56;
}
@media (max-width: 1000px) {
  nav {
    margin-top: 1.5rem;
  }
  main {
    padding: 2rem;
    margin-top: 2rem;
  }
}
</style>
