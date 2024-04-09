<template>
    <div>Hello, {{ name }}!</div>
</template>

<script lang="ts" setup>
    defineProps<{
        name: string;
    }>();
</script>