<template>
    <el-tooltip content="关于作者">
        <el-button color="#E6A23C" plain size='large' :icon="UserFilled" @click="onShowInfo"></el-button>
    </el-tooltip>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import { useNoteData } from "@/stores/noteData";
import { ElNotification } from "element-plus";
import { h } from "vue";

const noteData = useNoteData();
const onShowInfo = () => {
    ElNotification({
        title: "关于",
        message: h('i', { style: 'color: primary' }, '作者：' + noteData.getAuther()),
        type: 'info',
        duration: 5200,
        position: 'bottom-right',
    })
}
</script>

<style scoped></style>