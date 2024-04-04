<!-- 
    A button to display the add window
-->
<template>
    <el-button @click="OpenAddWindow" size='large' :icon="Plus" class="item-add-Btn" type="primary"></el-button>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { useNoteData } from '@/stores/noteData';


const noteData = useNoteData();

const OpenAddWindow = () => {
    noteData.toggleAdding();
}
</script>

<style scoped></style>