<template>
  <div class="index"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useSysStore } from '../../store/sys';
import {
  Cartesian3,
  Color,
  Cartographic,
  Matrix4,
  Cesium3DTileset,
} from 'cesium';

export default defineComponent({
  name: 'index',
  props: {},
  setup: () => {
    const sys = useSysStore();
    try {
      let tileset; //设置一个变量来存放通过3DTiles创建的模型

      tileset = sys.cesiumViewer.scene.primitives.add(
        new Cesium3DTileset({
          // url: 'https://invest.zjw.ningbo.gov.cn/BIM/yzddgj/5/tileset.json',
        }),
      );
      tileset._url =
        'https://invest.zjw.ningbo.gov.cn/BIM/yzddgj/5/tileset.json';
      console.log('title', tileset);
      sys.cesiumViewer.scene.globe.depthTestAgainstTerrain = true;
      tileset.tileLoad.addEventListener(function (tileset) {
        console.log('tileset', tileset);
        let boundingSphere = tileset.boundingSphere; // 模型的范围
        let cartographic = Cartographic.fromCartesian(boundingSphere.center); // 从笛卡尔位置创建一个新的位置实例（返回的是一个经纬度的）
        let surface = Cartesian3.fromRadians(
          cartographic.longitude,
          cartographic.latitude,
          0.0,
        ); // 以经纬度的值来返回Cartesian3(xyz)的位置 ，/
        let offset = Cartesian3.fromRadians(
          cartographic.longitude,
          cartographic.latitude,
          50,
        ); // 以经纬度的值来返回Cartesian3(xyz)的位置 ，//>
        let translation = Cartesian3.subtract(
          offset,
          surface,
          new Cartesian3(),
        ); // 计算两个笛卡尔的分量差异。
        tileset.modelMatrix = Matrix4.fromTranslation(translation);
        sys.cesiumViewer.zoomTo(tileset);
      });
    } catch (error) {
      console.log(`Error loading tileset: ${error}`);
    }
    // 通过czml的方式要创建实体，就需要用到viewer的dataSources属性，来看看官网介绍
    onMounted(() => {});
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
