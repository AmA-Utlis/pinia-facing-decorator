import type {IStore} from "../types";
import storeFactory from "../utils/factory";

export function Module(name: string): <C extends IStore>(target: C) => C;
export function Module<C extends IStore>(target: C): C;

export function Module<C extends IStore>(name?: string) {
  return function (Store: C) {
    return storeFactory(Store, name);
  };
}


export function GetModule(moduleClass: any, store: any): IStore {
  console.log("TODO: 待考虑！", store);
  return moduleClass;
}
