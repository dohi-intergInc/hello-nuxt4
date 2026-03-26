<script setup lang="ts">
interface Emits {
  (event: 'open', tabName: string): void
}
const emits = defineEmits<Emits>()

const handleOpen = (tabName: string) => {
  emits('open', tabName)
}
</script>
<template>
  <div>
    <div class="modal-container">
      <header class="modal-header">
        <button class="tab-btn" @click="() => handleOpen('type')">タイプ</button>
        <button class="tab-btn" @click="() => handleOpen('category')">カテゴリ</button>
        <button class="tab-btn" @click="() => handleOpen('color')">カラー</button>
      </header>
    </div>
  </div>
</template>
<style scoped>
.modal-container {
  background-color: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 928px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 32px;
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
</style>
