<template>
  <div class="container">
    <h1>About</h1>
    <p>これは Nuxt 4 のサンプルプロジェクトです。</p>
    <p>DevContainer で動作しています。</p>
    <NuxtLink to="/">トップに戻る</NuxtLink>
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
  color: #00dc82;
}

a {
  color: #00dc82;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
