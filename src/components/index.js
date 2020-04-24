import Vue from "vue";
import SigPlot from "./SigPlot";
import ArrayLayer from "./ArrayLayer";
import HrefLayer from "./HrefLayer";

const Components = {
  SigPlot,
  ArrayLayer,
  HrefLayer,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
