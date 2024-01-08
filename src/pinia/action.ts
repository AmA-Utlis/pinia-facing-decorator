import {PropertyActions} from "../utils/constant";
import {defineProperty} from "../utils/libs";

function Actions(target: any, key: string, decorator: TypedPropertyDescriptor<any>) {
  if (!target[PropertyActions]) {
    defineProperty(target, PropertyActions, {});
  }
  target[PropertyActions][key] = decorator.value;
}

export default Actions;
