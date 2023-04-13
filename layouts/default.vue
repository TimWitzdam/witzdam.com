<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/tools">Tools</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </nav>
      <div class="dropdown">
        <button class="dropbtn" @click="showDropdown = !showDropdown">
          Menu
        </button>
        <div class="dropdown-content" v-if="showDropdown">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/tools">Tools</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </div>
      </div>
    </header>
  </div>
  <main>
    <slot></slot>
  </main>
  <footer>
    <p>⚡ {{ renderTime }} ms render time</p>
  </footer>
</template>
<script script>
export default {
  data() {
    return {
      renderTime: null,
      showDropdown: false,
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
  font-weight: 700;
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
.dropdown {
  position: relative;
  display: inline-block;
}
.dropbtn {
  display: none;
  background-color: #2e2e2e;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 16px;
  border: none;
  border-radius: 0.5rem;
}
.dropdown-content {
  position: absolute;
  background-color: rgb(13, 13, 13);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0.8rem;
  border-radius: 1rem;
}
.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
@media (max-width: 1000px) {
  nav {
    display: none;
  }
  main {
    padding: 2rem;
    margin: 0;
  }
  .dropbtn {
    display: block;
    margin: 2rem;
  }
  .dropdown {
    display: flex;
    justify-content: flex-end;
  }
  .dropdown-content {
    margin-top: 4.4rem;
    margin-right: 2rem;
  }
}
</style>
