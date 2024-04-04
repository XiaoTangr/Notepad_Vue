<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { useNoteData } from '@/stores/noteData';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';

const body = ref();
const noteData = useNoteData();
onMounted(() => {
    body.value = document.body;
    let temp = {
        url: "/assets/images/bg.jpg",
        type: "disk",
    }
    noteData.PushBG(temp)
    axios.get('https://api.unmz.net/free/api/images/girl/getRandomGirlUrl?size=10')
        .then((res: any) => {
            if (res.data.msg === 'success') {
                for (let i = 0; i < res.data.data.length; i++) {
                    let temp = {
                        url: res.data.data[i],
                        type: "network",
                    }
                    noteData.PushBG(temp)
                }
            }
            
        })
        .catch((error: any) => {
            console.error('Error fetching data:', error);
        });

    body.value.style.backgroundImage = noteData.GetImgUrl ;
})
</script>

<style scoped></style>