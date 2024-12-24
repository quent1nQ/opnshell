<template>
    <div class="contentcard">
        <div class="bgpic" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
            <div class="mask2">
                <div class="tags">{{ tagText }}</div>
                <div class="cardtitle">{{ titleText }}</div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import defaultImage from '@/resources/5gcloud.jpg';

export default{
    name: 'contentcard',
    props: {
        tagText: {
            type: String,
            default: '数据集'
        },
        titleText: {
            type: String,
            default: ''
        },
        bgImage: {
            type: String,
            default: defaultImage
        }
    },
    mounted() {
        console.log('bgImage prop:', this.bgImage);
    }
}


</script>


<style>
.contentcard {
    width: 400px; /* 卡片的最小宽度 */
    height: 225px; /* 卡片的高度 */
    background-color: white;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* 更大的阴影效果 */
    border-radius: 10px;
    flex: 0 0 auto; /* 确保卡片不会缩小 */
    scroll-snap-align: start; /* 滚动对齐 */
    display: flex;
    font-size: 20px;
    position: relative; /* 使 z-index 生效 */
    z-index: 1; /* 提升卡片的层级 */
    position: relative;
    transition: transform 0.3s ease;
    box-sizing: border-box
}
.contentcard:hover{
    transform: scale(1.05);
    cursor: pointer;
}
.mask2{
    width: 400px;
    height: 225px;
    padding: 15px 15px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7)0%, rgba(0, 0, 0, 0.3)50%); /* 垂直渐变 */
    border-radius: 10px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
}
.bgpic{
    width: 400px;
    height: 225px;
    border-radius: 10px;
    background-size: cover;
    z-index: 2;
    display: flex;
    position: absolute;
    box-sizing: border-box
}

.tags{
    width: 48px;
    height: 24px;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.7);
    z-index: 10;
    border: 0px;
    padding: 2px 2px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    display: flex;
}
.cardtitle{
    color: white;
    margin-top: 140px;
    font-size: 20px;
}


</style>