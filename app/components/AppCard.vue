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
  <div>
    <img :src="props.imageUrl" alt="" class="card-img" />
    <a :href="props.url" target="_blank">{{ props.title }}</a>
    <p>{{ props.date }}</p>
  </div>
</template>
<style scoped>
.card-img {
  width: 320px;
  height: auto;
}
</style>
