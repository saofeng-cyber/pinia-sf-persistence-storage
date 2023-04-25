import type { PiniaPluginContext } from "pinia";
import { useStorage, StorageType } from "./utils/storage";
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
  /**
   * @reset 界面是否立即响应,不知道会不会影响界面渲染,请谨慎开启此配置
   */
  // reset: boolean;
}
declare module "pinia" {
  interface DefineStoreOptionsBase<S extends StateTree, Store> {
    persist?: Partial<PersistType>;
  }
}

export const myPiniaStoragePlugin = (context: PiniaPluginContext) => {
  const { options } = context;
  if (options.persist?.enable) {
    const usePiniaStorage = useStorage({ ...options.persist });
    const key = options.persist.key || "saofeng";
    // if (options.persist.reset)
    //   context.store.$state = usePiniaStorage.getItem(key);
    context.store.$subscribe((_, state) => {
      usePiniaStorage.setItem(key, state);
    });
  }
};

export * from "./utils/crypto";
export * from "./utils/storage";
