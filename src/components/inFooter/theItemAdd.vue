<!-- 
    A button to display the add window
-->
<template>
    <el-tooltip content="新建项目">
        <el-button @click="OpenAddWindow" color="#409EFF" plain size='large' :icon="Plus" class="item-add-Btn"
            type="primary"></el-button>
    </el-tooltip>
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