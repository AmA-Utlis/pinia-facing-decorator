# pinia 装饰器模块

使用装饰器来编写你的pinia，配合[vue-facing-decorator（npm）](https://www.npmjs.com/package/vue-facing-decorator)、[vue-facing-decorator（github）](https://github.com/facing-dev/vue-facing-decorator)
使用效果更加！

## 项目简介

- 使用技术：pinia
- 参考项目：vuex-module-decorators

## 安装

```
npm install pinia-facing-decorator
```

## 使用

### 代码

```
import {PiniaModule, Module, Plugins, Actions} from "@/pinia-facing-decorator";

@Module("test")
export default class Test extends PiniaModule {
  name: string = "name";
  age: number = 23;

  get getName() {
    return this.name;
  };

  get getAge() {
    return this.age;
  };

  @Actions
  setName(name: string) {
    this.name = name;
  }

  @Actions
  setSystemConfig(age: number) {
    this.age = age;
  }
  
  @Actions
  addAge(age: number) {
    this.age = age;
  }
  
  @Plugins
  debounce = {
     addAge: 3,
  }
}
```

就像

```
import {defineStore} from "pinia";

const testUserStore = defineStore("user", {
  state: () => {
    return {
      name: "name",
      age: 23
    };
  },
  getters: {
    getName: (state) => state.name,
    getAge: (state) => state.age
  },
  actions: {
    setName(name: string) {
      this.name = name;
    },
    setAge(age: number) {
      this.age = age;
    },
    addAge(age: number) {
      this.age = age;
    }
  },
  debounce: {
    addAge: 3,
  }
});

export default testUserStore;
```
