<template>
  <div class="Container">
    <el-card class="ItemRender-Container">
      <theitemrender />
    </el-card>
    <theFooter />
    <theBGimg />
    <AddNoteWindow />
  </div>

</template>

<script setup lang="ts">
import theFooter from '@/components/theFooter.vue'
import theitemrender from '@/components/theItemRender.vue'
import AddNoteWindow from '@/components/theAddNoteWindow.vue'
import theBGimg from "@/components/theBGimg.vue"
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
  width: 100%;
  max-height: 70%;
  display: block;
}

/* 小屏设备（屏幕宽度小于 768px）  */
@media screen and (max-width: 768px) {
  .ItemRender-Container {
    height: auto;
    max-height: 80%;
  }
}
</style>