<script setup lang="ts">
import { Layout } from '@/layout'
</script>

<template>
  <div class="fixed inset-0">
    <Layout class="h-full">
      <RouterView class="h-full"></RouterView>
    </Layout>
  </div>
</template>

<style scoped>
</style>
