<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Footer-Container">
    <theDropAllNote />
    <div class="space"></div>
    <theBGimg :isShow=true />
    <div class="space"></div>
    <theItemAdd />
    <div class="space"></div>
    <theIsDark />
    <div class="space"></div>
    <theAbout />
  </div>
</template>

<script setup lang="ts">
import theIsDark from "@/components/inFooter/theIsDark.vue";
import theItemAdd from "@/components/inFooter/theItemAdd.vue";
import theBGimg from "@/components/inFooter/theBGimg.vue";
import theDropAllNote from "@/components/inFooter/theDropAllNote.vue";
import theAbout from "@/components/inFooter/theAbout.vue";


/**
 * drop all the note when click the Submit button
 * after make sure the user want to drop all the note
 */


</script>

<style scoped>
.Footer-Container {
  position: fixed;
  bottom: 1em;
  left: 50%;
  transform: translate(-50%, 0%);
  background: var(--footer-bg-color);
  border: 1px solid var(--el-border-color);
  box-shadow: var(--el-box-shadow);
  backdrop-filter: blur(1em) !important;
  border-radius: 1em;
  display: flex;
  padding: 1.5em 2.5em;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  transition: all 0.7s ease-in-out;
}

.space {
  width: 2em;
}

/* 小屏设备（屏幕宽度小于 768px）  */

@media screen and (max-width: 768px) {

  .Footer-Container {
    bottom: -1em;
    padding-bottom: 2.5em;
  }
}

/* 大屏设备（屏幕宽度大于1080px）  */
@media screen and (min-width: 1080px) {

  .space {
    width: 1em;
  }

  .Footer-Container {
    bottom: 1em;
    padding: .5em 1em;
  }
}
</style>