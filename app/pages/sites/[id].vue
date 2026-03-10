<template>
  <div class="page-blog-detail">
    <div v-if="status === 'pending'" class="loading">読み込み中...</div>
    <div v-else-if="error" class="error">
      <p>記事の取得に失敗しました</p>
    </div>
    <article v-else-if="data">
      <h1>{{ data.title }}</h1>
      <time>{{ formatDate(data.publishedAt || data.createdAt) }}</time>
      <div class="content" v-html="data.content" />
    </article>
    <div class="back">
      <NuxtLink to="/blogs">&larr; ブログ一覧に戻る</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Blog } from '~~/shared/types/microcms'

const route = useRoute()
const { data, error, status } = await useFetch<Blog>(`/api/blogs/${route.params.id}`)
</script>

<script lang="ts">
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.page-blog-detail {
  padding: 2rem 0;
}

article h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

article time {
  display: block;
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 2rem;
}

.content {
  line-height: 1.8;
  color: #444;
}

.content :deep(h2) {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: #333;
}

.content :deep(h3) {
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem;
  color: #333;
}

.content :deep(p) {
  margin-bottom: 1rem;
}

.content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.content :deep(a) {
  color: #00dc82;
}

.content :deep(ul),
.content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.back {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e5e5;
}

.back a {
  color: #00dc82;
  font-weight: bold;
}

.back a:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  color: #888;
  padding: 3rem 0;
}

.error {
  text-align: center;
  color: #e53e3e;
  padding: 2rem 0;
}

@media (width <= 768px) {
  article h1 {
    font-size: 1.5rem;
  }
}
</style>
