<script setup lang="ts">
import type { MicroCMSListResponse } from 'microcms-js-sdk'
import type { Site } from '~~/shared/types/microcms'

const { data, error, status } = await useFetch<MicroCMSListResponse<Site>>('/api/sites')

const isOpenModal = ref(false)
const targetTab = ref()
const openModal = (tabName: string) => {
  isOpenModal.value = true
  targetTab.value = tabName
}
const closeModal = () => {
  isOpenModal.value = false
}

const filterTypes = ref<string[]>([])
const filterCategories = ref<string[]>([])
const filterColors = ref<string[]>([])

const handleList = (
  selectedTypes: string[],
  selectedCategory: string[],
  selectedColors: string[],
) => {
  filterTypes.value = selectedTypes
  filterCategories.value = selectedCategory
  filterColors.value = selectedColors
  closeModal()
}

const filteredList = computed<Site[]>(() => {
  if (!data.value) {
    return []
  } else if (
    filterTypes.value.length === 0 &&
    filterCategories.value.length === 0 &&
    filterColors.value.length === 0
  ) {
    return data.value.contents
  } else {
    // 3要素でフィルタリングする
    // 1. タイプ && カテゴリ && カラーとフィルター要素間の中ではAND検索
    // 2. 各フィルター要素の中ではOR検索
    return data.value.contents.filter((site) => {
      const matchType =
        filterTypes.value.length === 0 || filterTypes.value.some((type) => site.type.includes(type))
      const matchCategories =
        filterCategories.value.length === 0 ||
        filterCategories.value.some((category) => site.category.includes(category))
      const matchColors =
        filterColors.value.length === 0 ||
        filterColors.value.some((color) => {
          console.log(color, site.color, site.color.includes(color))
          return site.color.includes(color)
        })

      return matchType && matchCategories && matchColors
    })
  }
})
</script>
<template>
  <div class="main">
    <AppSearchBtn @open="openModal" />
    <AppSearch v-if="isOpenModal === true" :current-tab="targetTab" @getlist="handleList" />
    <div v-if="status === 'pending'">読み込み中...</div>
    <div v-else-if="error" class="error">
      <p>データの取得に失敗しました</p>
      <pre>{{ error.message }}</pre>
    </div>
    <template v-else-if="data">
      <div class="card-section">
        <AppCard
          v-for="site in filteredList"
          :key="site.id"
          :image-url="site.image.url"
          :title="site.title"
          :date="site.date"
          :url="site.url"
        />
      </div>
      <p v-if="filteredList.length === 0">記事がありません</p>
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
