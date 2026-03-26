<template>
  <header class="header">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">GOOD Design Gallery</NuxtLink>
      <button class="menu-toggle" aria-label="メニュー" @click="isOpen = !isOpen">
        <span class="bar" :class="{ open: isOpen }" />
        <span class="bar" :class="{ open: isOpen }" />
        <span class="bar" :class="{ open: isOpen }" />
      </button>
      <nav class="nav" :class="{ open: isOpen }">
        <NuxtLink to="/" @click="isOpen = false">ホーム</NuxtLink>
        <!-- <NuxtLink to="/about" @click="isOpen = false">このサイトについて</NuxtLink> -->
        <NuxtLink to="/blogs" @click="isOpen = false">ブログ</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>

<style scoped>
.header {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 60px;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
  color: #00acac;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav a:hover,
.nav a.router-link-active {
  color: #00acac;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.bar {
  display: block;
  width: 24px;
  height: 2px;
  background-color: #333;
  transition:
    transform 0.3s,
    opacity 0.3s;
}

.bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (width <= 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    padding: 1rem;
    gap: 0;
  }

  .nav.open {
    display: flex;
  }

  .nav a {
    padding: 0.75rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .nav a:last-child {
    border-bottom: none;
  }
}
</style>
