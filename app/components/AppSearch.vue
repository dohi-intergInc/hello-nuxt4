<script setup lang="ts">
import { ref } from 'vue'

const filterOptions = ref([
  { id: 'service', label: 'サービス' },
  { id: 'promotion', label: 'プロモーション' },
  { id: 'lp', label: 'LP' },
  { id: 'recruitment', label: '採用' },
  { id: 'portfolio', label: 'ポートフォリオ' },
  { id: 'branding', label: 'ブランディング' },
  { id: 'corporate', label: 'コーポレート' },
  { id: 'media-portal', label: 'メディア・ポータル' },
  { id: 'ec', label: 'EC' },
])

const categoryOptions = ref([
  { id: 'localgovernment', label: '自治体' },
  { id: 'food', label: '食品' },
  { id: 'fashion', label: 'ファッション' },
])

const colorOptions = ref([
  { id: 'black', label: 'ブラック' },
  { id: 'white', label: 'ホワイト' },
  { id: 'gray', label: 'グレー' },
])

interface Props {
  currentTab: string
}

defineProps<Props>()

const selectedTypes = ref<string[]>([])

const clearFilters = () => {
  selectedTypes.value = []
}

interface Emits {
  (event: 'getlist', selectedTypes: string[]): void
}

const emits = defineEmits<Emits>()

const isGetList = () => {
  emits('getlist', selectedTypes.value)
}
</script>
<template>
  <div>
    <div class="modal-container">
      <main class="modal-body">
        <div v-if="currentTab === 'type'" class="options-grid">
          <label v-for="option in filterOptions" :key="option.id" class="option-card">
            <input v-model="selectedTypes" type="checkbox" :value="option.label" />
            <span>{{ option.label }}</span>
          </label>
        </div>
        <div v-if="currentTab === 'category'" class="options-grid">
          <label v-for="option in categoryOptions" :key="option.id" class="option-card">
            <input v-model="selectedTypes" type="checkbox" :value="option.label" />
            <span>{{ option.label }}</span>
          </label>
        </div>
        <div v-if="currentTab === 'color'" class="options-grid">
          <label v-for="option in colorOptions" :key="option.id" class="option-card">
            <input v-model="selectedTypes" type="checkbox" :value="option.label" />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </main>
      <footer class="modal-footer">
        <div class="selected-info">
          <p>選択中の条件:{{ selectedTypes }}</p>
          <div class="action-buttons">
            <button class="btn-clear" @click="clearFilters">絞り込み条件をクリア</button>
            <button class="btn-submit" @click="isGetList">絞り込む</button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style scoped>
.modal-container {
  background-color: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 928px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.modal-header {
  display: flex;
  justify-content: space-around;
  padding: 16px;
  border-bottom: 1px solid #eee;
}
.tab-btn {
  border: none;
  background: none;
  font-weight: bold;
  padding: 12px 32px;
  border-radius: 24px;
  cursor: pointer;
}
/* .tab-btn.active {
  background-color: #000;
  color: #fff;
} */
.modal-body {
  padding: 32px;
  max-height: 400px;
  overflow-y: auto;
}
.options-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.option-card {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}
.option-card:hover {
  background-color: #eee;
}
/* .hidden-checkbox {
  display: none;
} */
/* .custom-checkbox {
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 4px;
  margin-right: 12px;
  display: inline-block;
} */
.modal-footer {
  border-top: 1px solid #eee;
}
.selected-info {
  padding: 16px 32px;
  border-bottom: 1px solid #eee;
  font-weight: bold;
}
.action-buttons {
  display: flex;
  gap: 16px;
  padding: 24px 32px;
  background-color: #fafafa;
}
.btn-clear,
.btn-submit {
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border: none;
}
.btn-clear {
  background-color: #e0e0e0;
  color: #333;
}
.btn-submit {
  background-color: #3aaf2f;
  color: white;
}
</style>
