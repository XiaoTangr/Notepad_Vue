<template>
    <el-tooltip v-if="isShow" content="随机一张背景图片">
        <el-button color="#626aef" plain size='large' :icon="PictureFilled" @click="UpdateBG(API)"></el-button>
    </el-tooltip>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { PictureFilled } from '@element-plus/icons-vue'
const props = defineProps({
    isShow: {
        type: Boolean,
        default: false
    }
});

const APIs = [
    {
        url: 'https://api.unmz.net/free/api/images/girl/getRandomGirlUrl?size=10',
        getres: (res: any) => {
            if (res.data.msg === 'success') {
                let index = Math.random() * res.data.data.length | 0;
                return res.data.data[index];
            }
        }
    }, {
        url: 'http://www.wudada.online/Api/ScTp',
        getres: (res: any) => {
            if (res.data.msg === "请求成功") {
                return res.data.data;
            }
        }
    },{
        URL:"https://api.lucksss.com/api/cosbz",
        getres:(res:any)=>{
            return "https://api.lucksss.com/api/cosbz"
        }
    }
];

let API = APIs[1]

const UpdateBG = (API: any) => {
    axios.get(API.url)
        .then((res: any) => {
            const body = ref();
            body.value = document.body;
            body.value.style.backgroundImage = `url(${API.getres(res)})`;
        })
        .catch((error: any) => {
            console.error('Error fetching data:', error);
        });
}

onMounted(() => {

    UpdateBG(API)

})
</script>

<style scoped></style>