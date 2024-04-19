<template>
  <div class="Container">
    <el-card class="ItemRender-Container">
      <theitemrender />
    </el-card>
    <theFooter />

    <AddNoteWindow />
  </div>

</template>

<script setup lang="ts">
import theFooter from '@/components/theFooter.vue'
import theitemrender from '@/components/theItemRender.vue'
import AddNoteWindow from '@/components/theAddNoteWindow.vue'

import { useNoteData } from './stores/noteData';
import { onMounted, ref, watch } from 'vue';

let noteData = useNoteData();

// 使用LocalStorage存储数据
onMounted(() => {

  noteData.loadFromLocalStorage()
})
watch(noteData, () => {
  noteData.saveToLocalStorage()
})

</script>

<style scoped>
.Container {
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.ItemRender-Container {
  margin: .5em;
  overflow-y: auto;
  width: 70%;
  height: 70%;
  max-height: 90%;
  display: block;
  transition: all 0.7s ease-in-out;
}


/* 小屏设备（屏幕宽度小于 768px）  */

@media screen and (max-width: 768px) {


  .ItemRender-Container {
    width: 100%;
    height: 85%;
  }
}

/* 大屏设备（屏幕宽度大于1080px）  */
@media screen and (min-width: 1080px) {


  .ItemRender-Container {
    width: 60%;
    height: 70%;
  }
}
</style>