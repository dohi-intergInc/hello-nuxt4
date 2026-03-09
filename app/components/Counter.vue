<template>
  <div class="counter">
    <p>カウント: {{ count }}</p>
    <button @click="count++">+1</button>
    <button @click="count--">-1</button>
    <button @click="count = 0">リセット</button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
</script>

<style scoped>
.counter {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.counter p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #00dc82;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #00b368;
}
</style>
