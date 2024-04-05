<template>

    <el-popconfirm title="删除全部？" @confirm="onDropAllNote" @cancel="onCancelDropAll">
        <template #reference>
            <el-button size='large' color="#67C23A" plain :icon="Delete"></el-button>
        </template>
    </el-popconfirm>

</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
import { useNoteData } from "@/stores/noteData";
import { ElNotification } from "element-plus";
import { h } from "vue";


const noteData = useNoteData();
const onDropAllNote = () => {
    noteData.DropAllNote();
    ElNotification({
        title: "你来真的？",
        message: h('i', { style: 'color: primary' }, '你删完了!'),
        type: 'success',
        duration: 2000, position: 'bottom-right',
    })
}

const onCancelDropAll = () => {
    ElNotification({
        title: "你取消了",
        message: h('i', { style: 'color: primary' }, '你取消了删除!'),
        type: 'info',
        duration: 2000,
        position: 'bottom-right',
    })
}
</script>

<style scoped></style>