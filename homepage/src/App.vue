<template>
    <div class="background">
      <div class="layout">
        <div class="sidebar" :class="{ 'sidebar-mobile': isMobile }">
          <div
            class="sidebar-item"
            @click="navigateTo('https://jiutian.10086.cn/open/#/firstpage')"
            >首 页</div
          >
          <div
            class="sidebar-item"
            @click="navigateTo('https://jiutian.10086.cn/open/#/setList')"
            >数 据</div
          >
          <div
            class="sidebar-item"
            @click="navigateTo('https://jiutian.10086.cn/open/netsimulation/#/homepage')"
            >仿 真</div
          >
          <div
            class="sidebar-item"
            @click="navigateTo('https://jiutian.10086.cn/open/#/taskList')"
            >任 务</div
          >
          <div
            class="sidebar-item"
            @click="navigateTo('https://jiutian.10086.cn/open/#/platIntro')"
            >了 解</div
          >
          <div
            class="sidebar-item"
            @click="navigateTo('https://jiutian.10086.cn/open/#/industryAcademiaAndResearch')"
            >生 态</div
          >
          <div
            class="sidebar-item"
            @click="navigateTo('https://jiutian.10086.cn/open/#/openSource')"
            >开 源</div
          >
        </div>
        <div class="mainarea">
          <div class="mainpic">
            <div class="blackmask">
              <div class="title">
                开放创新平台
                <br />
                领先的网络智能化一站服务
              </div>
              <div class="subtitle">
                九天·开放创新平台致力于提供领先的网络智能化一站式服务。平台融合了先进的技术、强大的战略资源以及多样化的实验网络场景，旨在打造一个全面的智能网络解决方案
              </div>
              <button @click="navigateTo('https://jiutian.10086.cn/open/#/firstpage')">
                立即进入
              </button>
            </div>
          </div>
          <div class="content" ref="scrollContainer">
            <contentcard
              tagText="数据集"
              titleText="云原生5G网络故障"
              @click="navigateTo('https://jiutian.10086.cn/open/#/dataset/710029')"
            />
            <contentcard
              tagText="数据集"
              titleText="智能业务识别_HTTPS"
              :bgImage="httpsImage"
              @click="navigateTo('https://jiutian.10086.cn/open/#/dataset/710024')"
            ></contentcard>
            <contentcard
              tagText="数据集"
              titleText="城市网络流量长时预测"
              :bgImage="cityImage"
              @click="navigateTo('https://jiutian.10086.cn/open/#/dataset/710030')"
            />
            <contentcard
              tagText="数据集"
              titleText="云原生5G网络故障检测及定位"
              @click="navigateTo('https://jiutian.10086.cn/open/#/dataset/710020')"
            ></contentcard>
            <contentcard tagText="数据集" titleText="云原生5G网络故障"></contentcard>
            <contentcard tagText="数据集" titleText="云原生5G网络故障"></contentcard>
          </div>
          <div class="footer">京ICP备2024084290号</div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import contentcard from './contentcard.vue';
  import cityImage from '@/resources/city.webp';
  import httpsImage from '@/resources/https.webp';
  
  export default defineComponent({
    name: 'App',
    components: {
      contentcard,
    },
    data() {
      return {
        cityImage,
        httpsImage,
        isMobile: false,
      };
    },
    methods: {
      navigateTo(url: string) {
        window.location.href = url;
      },
      checkMobile() {
        this.isMobile = window.innerWidth <= 768;
      },
    },
    mounted() {
      this.checkMobile();
      window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkMobile);
    },
  });
  </script>
  
  <style>
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
  
  .background {
    width: 100vw;
    height: 100vh;
    margin: 0px;
    background-color: #141414;
    z-index: 1;
    position: relative;
    display: flex;
  }
  
  .layout {
    flex-direction: row;
    z-index: 2;
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  .sidebar {
    display: flex;
    width: 120px;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.5),
      rgba(20, 20, 20, 0)
    );
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    flex-direction: column;
    overflow: hidden;
  }
  
  .sidebar-mobile {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    flex-direction: row;
    background: rgba(20, 20, 20, 0.9);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 10;
  }
  
  .sidebar-mobile .sidebar-item {
    flex: 1;
    margin: 0;
    padding: 10px 0;
  }
  
  .mainarea {
    margin: 0px;
    flex: 1;
    height: 100%;
    background-color: #141414;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .mainpic {
    background-image: url('./resources/BG.jpg');
    background-size: cover;
    min-height: 680px;
    width: 100%;
    background-color: black;
    box-sizing: border-box;
    display: flex;
    border-radius: 0px;
    overflow: hidden;
  }
  
  .sidebar-item {
    width: 100%;
    font-size: 18px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    padding: 10px 0;
    transition: transform 0.2s ease;
  }
  
  .content {
    width: 100%;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0px 20px;
    gap: 20px;
    scroll-snap-type: x mandatory;
    position: relative;
    overflow: visible;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .sidebar-item:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .title {
    color: white;
    max-width: 800px;
    margin: 0 auto;
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .blackmask {
    background-image: linear-gradient(
      to top,
      rgba(20, 20, 20, 1) 0%,
      rgba(0, 0, 0, 0.8) 30%,
      rgba(0, 0, 0, 0.7) 100%
    );
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .subtitle {
    color: rgba(255, 255, 255, 0.75);
    max-width: 800px;
    font-size: 18px;
  }
  
  button {
    color: rgba(255, 255, 255, 1);
    padding: 10px 40px;
    background-color: rgba(255, 255, 255, 0.3);
    border-width: 0px;
    border-radius: 10px;
    margin-top: 50px;
    font-size: 20px;
    transition: transform 0.2s ease;
  }
  
  button:hover {
    transform: scale(1.05);
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  .footer {
    color: gray;
    display: flex;
    align-self: center;
    margin: 15px;
    font-size: 15px;
  }
  
  /* 移动端适配 */
  @media screen and (max-width: 768px) {
    .sidebar {
      display: none;
    }
  
    .mainpic {
      min-height: 300px;
    }
  
    .title {
      font-size: 28px;
    }
  
    .subtitle {
      font-size: 14px;
    }
  
    .content {
      padding: 10px;
    }
  
    .footer {
      font-size: 12px;
      margin: 10px;
    }
  
    .sidebar-mobile {
      display: flex;
    }
  
    .sidebar-mobile .sidebar-item {
      font-size: 14px;
      padding: 10px 0;
    }
  
    button {
      margin-top: 20px;
      padding: 8px 20px;
      font-size: 16px;
    }
  }
  </style>
  