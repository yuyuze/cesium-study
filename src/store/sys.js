import { defineStore } from 'pinia';

export const useSysStore = defineStore({
  id: 'sys',
  state: () => ({
    cesiumViewer: null,
  }),
  actions: {
    setCesiumViewer(viewer) {
      this.cesiumViewer = viewer;
    },
  },
});
