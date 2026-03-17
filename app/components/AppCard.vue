<script setup lang="ts">
interface Props {
  imageUrl: string
  title: string
  date: number
  url: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="card">
    <img :src="props.imageUrl" alt="" class="card-img" />
    <a :href="props.url" target="_blank" class="card-title">{{ props.title }}</a>
    <p class="card-date">{{ props.date }}</p>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.card-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.card-title {
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.card-title:hover {
  text-decoration: underline;
  color: #00dc82;
}
.card-date {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
