<p align="center">
  <img alt="" src="https://i.imgur.com/prUNzrf.png">
</p>

<p align="center">
  <i>Artwork from <a href="https://pinia.vuejs.org/">Pinia</a></i>
</p>
<h1 align="center">pinia-sf-persistence-storage</h1>
<p align="center">Configurable persistence and rehydration of Pinia stores.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@saofeng_cyber/pinia-sf-persistence-storage" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@saofeng_cyber/pinia-sf-persistence-storage.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

# 🚀 Quickstart

## 安装

```sh
pnpm add @saofeng_cyber/pinia-sf-persistence-storage
```

或者

```sh
yarn add @saofeng_cyber/pinia-sf-persistence-storage
```

或者

```sh
npm add @saofeng_cyber/pinia-sf-persistence-storage
```

# 使用

在入口文件 `main.ts` 使用

```ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import { myPiniaStoragePlugin } from "@saofeng_cyber/pinia-sf-persistence-storage";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

pinia.use(myPiniaStoragePlugin);

app.use(pinia).mount("#app");
```

# 选项

```ts
export interface PersistType {
interface PersistType {
  /**
   * @enable 是否要开启缓存
   */
  enable: boolean;
  /**
   * @key 存储的key值
   */
  key: string;
  /**
   * @storageType 存储的类型
   */
  storageType: StorageType;
  /**
   * @encypto 是否加密
   */
  isEncrypto: boolean;
}
```

# Author

👤 **saofeng**

- Github: [@saofeng-cyber](https://github.com/saofeng-cyber)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_


📝 License