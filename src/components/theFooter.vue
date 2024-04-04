<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <div class="Footer-Container">
    <theIsDark />
    <theItemAdd />
    <el-popconfirm title="删除全部？" @confirm="onDropAllNote" @cancel="onCancelDropAll">
      <template #reference>
        <el-button size='large' type="primary" :icon="Delete"></el-button>
      </template>
    </el-popconfirm>
    <el-button size='large' type="primary" :icon="UserFilled" @click="onShowInfo"></el-button>
  </div>
</template>

<script setup lang="ts">
import theIsDark from "@/components/inFooter/theIsDark.vue";
import theItemAdd from "@/components/inFooter/theItemAdd.vue";
import { Delete,UserFilled } from '@element-plus/icons-vue'

import { useNoteData } from "@/stores/noteData";
import { ElNotification } from "element-plus";
import { h } from "vue";

const noteData = useNoteData();



/**
 * drop all the note when click the Submit button
 * after make sure the user want to drop all the note
 */
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

<style scoped>
.Footer-Container {
  position: fixed;
  bottom: -1em;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--footer-bg-color);
  border: 1px solid var(--el-border-color);
  box-shadow: var(--el-box-shadow);
  border-radius: 1.5em;
  display: flex;
  padding: 1em 2em;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(1em);
  z-index: 1000
}
</style>