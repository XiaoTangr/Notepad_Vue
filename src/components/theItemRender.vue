<!-- 
    Render Note List 
    auto render note list when data change
    use：v-for
-->
<template>
    <div class="noteItem-Container">
        <!-- 没有数据时显示的内容 -->
        <div v-if="noteDate.Data.NoteList.length == 0" class="noteItem-NoDataContainer">
            <h2>没有数据！</h2>点击下面的按钮添加数据叭！<br>(゜-゜)つロ 干杯~
        </div>
        <div v-for="(item, index) in noteDate.Data.NoteList" :key="index" class="noteItem-InnerContainer">
            <el-card shadow="hover">
                <template #header>
                    <div class="noteItem-Title-Container">
                        <h2>{{ item.Title }}</h2>
                        <span>
                            {{ item.CreateDate }}
                        </span>
                    </div>
                </template>
                {{ item.Content }}
                <template #footer>
                    <div class="noteItem-Footer-Container">
                        <el-popconfirm title="确定完成了？" @confirm="onFinishOne(item)" @cancel="onCancelDropOne">
                            <template #reference>
                                <el-button size="large" circle :icon='Select' @click="" type="primary"></el-button>
                            </template>
                        </el-popconfirm>
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>
<script setup lang="ts">
import { h } from 'vue';
import { useNoteData } from '@/stores/noteData'
import { Select } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus';
const noteDate = useNoteData()

/**
 * delete one note when finish it
 * @param index index of the item
 */
const onFinishOne = (index: any) => {
    noteDate.DropOneNote(index)
    ElNotification({
        title: '(゜-゜)つロ 干杯~',
        message: h('i', { style: 'color: primary' }, '完成了,噢耶!!!'),
        type: 'success',
        position: 'bottom-right',
    })
}
/**
 * alert when cancel the drop one
 */
const onCancelDropOne = () => {
    ElNotification({
        title: '加油！',
        message: h('i', { style: 'color: primary' }, '还没完成哦,继续加油!!!'),
        type: 'success',

        duration: 2000, position: 'bottom-right',
    })
}
</script>


<style scoped>
.noteItem-NoDataContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.noteItem-InnerContainer {
    width: 100%;
    padding: .5em 1em;
}

.noteItem-Title-Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.noteItem-Footer-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>