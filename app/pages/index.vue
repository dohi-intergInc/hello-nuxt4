<script setup lang="ts">
import type { MicroCMSListResponse } from 'microcms-js-sdk'
import type { Site } from '~~/shared/types/microcms'
// import AppSearchBtn from './components/AppSearchBtn.vue'
// import AppCard from './components/AppCard.vue'

const { data, error, status } = await useFetch<MicroCMSListResponse<Site>>('/api/sites')
</script>
<template>
  <!-- <div>
    <AppSearchBtn />
  </div> -->
  <div>
    <div v-if="status === 'pending'">読み込み中...</div>
    <div v-else-if="error" class="error">
      <p>データの取得に失敗しました</p>
      <pre>{{ error.message }}</pre>
    </div>
    <template v-else-if="data">
      <div class="card-section">
        <AppCard
          v-for="site in data.contents"
          :key="site.id"
          :image-url="site.image.url"
          :title="site.title"
          :date="site.date"
          :url="site.url"
        />
      </div>
      <p v-if="data.contents.length === 0">記事がありません</p>
    </template>
  </div>
</template>

<style scoped>
.card-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .card-section {
    grid-template-columns: repeat(1, 1fr);
  }
}
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
