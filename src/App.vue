<script setup>
import { onMounted, markRaw, ref } from 'vue';
import {
  ArcGisMapServerImageryProvider,
  Camera,
  Viewer,
  UrlTemplateImageryProvider,
  Color,
  Rectangle,
} from 'cesium';
import { useSysStore } from './store/sys';
import Shape from './components/Shape/index.vue';
const containerRef = ref();
const isLoad = ref(false);
const sysStore = useSysStore();
let url =
  'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}';
onMounted(() => {
  const viewer = new Viewer(containerRef.value, {
    animation: true, //是否显示动画控件
    baseLayerPicker: true, //是否显示图层选择控件
    fullscreenButton: true, //是否显示全屏按钮
    vrButton: true, // vr部件
    geocoder: true, // 位置搜索部件
    homeButton: true, //是否显示Home按钮
    infoBox: true, //是否显示点击要素之后显示的信息
    sceneModePicker: true, // 二三维切换部件
    timeline: true, //是否显示时间线控件
    navigationHelpButton: true, //是否显示帮助信息控件
    //> 设置地图
    imageryProvider: new UrlTemplateImageryProvider({ url }),
  });
  const rawViewer = markRaw(viewer);
  sysStore.setCesiumViewer(rawViewer);
  isLoad.value = true;
  console.log('sysStore', sysStore.cesiumViewer);
});
</script>

<template>
  <div
    ref="containerRef"
    :style="{
      width: '100vw',
      height: '100vh',
    }"
  ></div>
  <Shape v-if="isLoad"></Shape>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
