<template>
  <div class="container">
    <h1>Hello Nuxt 4! 🚀</h1>
    <p>Nuxt 4 プロジェクトへようこそ</p>
    <Counter />
    <nav>
      <NuxtLink to="/about">About ページへ</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: system-ui, sans-serif;
}

h1 {
  font-size: 2.5rem;
  color: #00dc82;
}

p {
  font-size: 1.2rem;
  color: #666;
}

nav {
  margin-top: 2rem;
}

nav a {
  color: #00dc82;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
