import {defineProperty} from "../utils/libs";
import {PropertyPlugins} from "../utils/constant";

function Plugins(target: any, key: string) {
  if (!target[PropertyPlugins]) {
    defineProperty(target, PropertyPlugins, []);
  }
  target[PropertyPlugins].push(key);
}

export default Plugins;
