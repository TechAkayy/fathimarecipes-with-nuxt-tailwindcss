<script setup lang="ts">
  defineProps({
    navs: {
      type: Array,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>

<template>
  <div class="h-full items-center">
    <div class="flex h-full space-x-2">
      <BaseButton
        v-for="(nav, index) in navs"
        :key="index"
        :to="nav.to"
        :label="nav.title"
        size="lg"
        :variant="nav.to === currentPath ? 'solid' : 'ghost'"
        class="!rounded-lg"
      />
    </div>
  </div>
</template>

<style scoped></style>
