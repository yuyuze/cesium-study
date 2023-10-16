<template>
  <div class="index"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import czml from './czml.json';
import { useSysStore } from '../../store/sys';
import { Cartesian3, Color, CornerType, CzmlDataSource } from 'cesium';

export default defineComponent({
  name: 'index',
  props: {},
  setup: () => {
    const sys = useSysStore();
    //> 绘制一个圆柱体
    const blueCylinder = sys.cesiumViewer.entities.add({
      name: 'Blue box',
      position: Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
      cylinder: {
        length: 500000.0,
        topRadius: 200000.0,
        bottomRadius: 100000.0,
        material: Color.BLUE, //> 设置材料的颜色
      },
    });
    //> 绘制立方体
    const redBox = sys.cesiumViewer.entities.add({
      name: 'Red box with black outline',
      position: Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
      box: {
        dimensions: new Cartesian3(400000.0, 300000.0, 500000.0), //>一个 Cartesian3 属性，用于指定框的长度，宽度和高度
        material: Color.RED.withAlpha(0.5), //>指定用于填充框的材料。 withAlpha: 透明度
        outline: true, //>一个布尔型属性，指定是否对框进行概述。
        outlineColor: Color.BLACK, //>指定轮廓的颜色
      },
    });
    //> 绘制一个走廊
    const blueCorridor = sys.cesiumViewer.entities.add({
      name: 'Blue extruded corridor with beveled corners and outline',
      corridor: {
        positions: Cartesian3.fromDegreesArray([
          -95.0, 40.0, -100.0, 40.0, -100.0, 35.0,
        ]),
        height: 200000.0,
        extrudedHeight: 100000.0,
        width: 200000.0,
        cornerType: CornerType.BEVELED,
        material: Color.YELLOW.withAlpha(0.5),
        outline: true,
        outlineColor: Color.WHITE,
      },
    });
    sys.cesiumViewer.zoomTo(sys.cesiumViewer.entities);

    // 通过czml的方式要创建实体，就需要用到viewer的dataSources属性，来看看官网介绍
    onMounted(() => {
      console.log('123', czml);
      sys.cesiumViewer.dataSources.add(CzmlDataSource.load(czml));
    });
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
