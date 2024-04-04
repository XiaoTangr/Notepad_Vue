<!-- 
    change the Dark mode of the theme
    copy from my another project
    see the link below
-->
<!--
    https://github.com/XiaoTangr/XTBlog_edu/blob/main/Client/VUE/src/components/theisdark.vue
    Author :XiaoTangr
    License :MIT
-->
<template>
    <el-button size='large' @click="toggleDark" :type="isDark ? 'primary' : 'info'" :icon="DarkIcon" />
</template>

<script setup lang="ts">

import { useDark } from '@vueuse/core'
import { ref, watch } from 'vue';
import { MoonNight, PartlyCloudy } from '@element-plus/icons-vue'
const isDark = useDark();
const DarkIcon = ref(isDark.value ? MoonNight : PartlyCloudy)
const toggleDark = () => {
    isDark.value = !isDark.value
}
// 监听主题更新
watch(isDark, () => {
    if (isDark.value) {
        DarkIcon.value = MoonNight
    } else {
        DarkIcon.value = PartlyCloudy
    }
})

</script>

<style scoped></style>