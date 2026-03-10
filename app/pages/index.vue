<template>
  <div class="page-home">
    <h1>サイトギャラリー</h1>
    <p class="lead">Nuxt 4 プロジェクトへようこそ</p>
    <nav>
      <NuxtLink to="/blogs">このサイトについて</NuxtLink>
      <NuxtLink to="/about">About ページへ →</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.page-home {
  text-align: center;
  padding: 2rem 0;
}

h1 {
  font-size: 2.5rem;
  color: #00dc82;
}

.lead {
  font-size: 1.2rem;
  color: #666;
  margin-top: 0.5rem;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

nav a {
  color: #00dc82;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

@media (width <= 768px) {
  h1 {
    font-size: 1.75rem;
  }

  .lead {
    font-size: 1rem;
  }
}
</style>
