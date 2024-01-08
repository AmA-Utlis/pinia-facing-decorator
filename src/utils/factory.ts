// @ts-nocheck
import {defineStore, acceptHMRUpdate} from "pinia";
import type {IStore} from "../types";
import {
  PropertyPlugins,
  PropertyActions
} from "./constant";

function storeFactory<C extends IStore>(Store: C, name?: string) {
  const proto = Store.prototype;

  const pluginKeys = proto[PropertyPlugins] || [];
  const states: Record<string, any> = {};
  const getters: Record<string, (state: IStore) => any> = {};
  const plugins: Record<string, any> = {};

  const options = {getters};

  // prototype props.
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === "constructor") {
      return;
    }
    const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(proto, key)!;
    if (descriptor.get) {
      options.getters![key] = descriptor.get;
    }
  });

  // new Store
  const data = new Store();
  Object.keys(data).forEach((key) => {
    if (pluginKeys.includes(key)) {
      plugins[key] = data[key];
    } else {
      states[key] = data[key];
    }
  });

  // options
  Object.assign(options, {
    state: () => JSON.parse(JSON.stringify(states)),
    actions: {...proto[PropertyActions]},
    hydrate: proto["hydrate"],
    ...plugins
  });

  const storeName = name || Store.name;

  const useStore = defineStore(storeName, options);

  // 确保传递正确的 store 声明，本例中为 `useAuth`
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
  }

  return () => {
    return useStore();
  };
}

export default storeFactory;
