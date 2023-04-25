# pinia 持久化插件

## 安装

```pnpm
pnpm add pinia-sf-persistence-storage
```

或者

```yarn
yarn add pinia-sf-persistence-storage
```

或者

```npm
npm add pinia-sf-persistence-storage
```

## 使用

在入口文件 `main.ts` 使用

```ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import { myPiniaStoragePlugin } from "pinia-sf-storage";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

pinia.use(myPiniaStoragePlugin);

app.use(pinia).mount("#app");
```

## 选项

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

## 授权

MIT 授权。
