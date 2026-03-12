<script setup lang="ts">
import type { MicroCMSListResponse } from 'microcms-js-sdk'
import type { Site } from '~~/shared/types/microcms'

const { data, error, status } = await useFetch<MicroCMSListResponse<Site>>('/api/sites')
</script>
<template>
  <div>
    <div v-if="status === 'pending'">読み込み中...</div>
    <div v-else-if="error" class="error">
      <p>データの取得に失敗しました</p>
      <pre>{{ error.message }}</pre>
    </div>
    <template v-else-if="data">
      <AppCard
        v-for="site in data.contents"
        :key="site.id"
        :image-url="site.image.url"
        :title="site.title"
        :date="site.date"
        :url="site.url"
      />
      <p v-if="data.contents.length === 0">記事がありません</p>
    </template>
  </div>
</template>

<style scoped>
/* .page-home {
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
} */
</style>
