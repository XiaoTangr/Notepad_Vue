<!-- 
    the window of add one note
    it is a dialog window ,it will be shown when user click the button of add one note
-->
<template>
    <div>
        <el-dialog v-model="noteData.isAdding" title="新建任务" width="24em" draggable destroy-on-close center overflow
            label-position="right" :close-on-click-modal=false :close-on-press-escape=false :show-close=false>
            <span>请输入内容</span>
            <template #footer>
                <el-form :model="form" label-width="auto" style="max-width: 600px">
                    <el-form-item label="标题">
                        <el-input v-model="form.Title" />
                    </el-form-item>
                    <el-form-item label="内容">
                        <el-input :autosize="{ minRows: 2, maxRows: 6 }" type="textarea" v-model="form.Content" />
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="onCancel">取消</el-button>
                        <el-button type="primary" @click="onSubmit">创建</el-button>
                    </el-form-item>
                </el-form>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { useNoteData } from '@/stores/noteData';
import { ElNotification } from 'element-plus';
import { h, reactive, ref } from 'vue'
let noteData = useNoteData();

const form = ref({
    Title: '',
    CreateDate: '',
    Content: ''
})


const onSubmit = () => {

    if (form.value.Title == '' || form.value.Content == '') {
        ElNotification({
            title: 'O.o ?',
            message: h('span', null, '总得写点东西吧？'),
            type: 'warning',

            duration: 2000,
            position: 'bottom-right',
        })
    } else {
        form.value.CreateDate = new Date().toLocaleString();
        noteData.isAdding = false;
        noteData.AddNote(form.value);
        form.value = {
            Title: '',
            CreateDate: '',
            Content: ''
        }

        ElNotification({
            title: '(゜-゜)つロ 干杯~',
            message: h('i', { style: 'color: primary' }, '添加了一条待办！\n加油去完成它叭'),
            type: 'success',

            duration: 2000,
            position: 'bottom-right',
        })
    }


}
const onCancel = () => {
    ElNotification({
        title: '(つェ⊂)',
        message: h('span', null, '用户取消了操作'),
        type: 'info',

        duration: 2000,
        position: 'bottom-right',
    })
    noteData.isAdding = false;
}

</script>
<style scoped></style>