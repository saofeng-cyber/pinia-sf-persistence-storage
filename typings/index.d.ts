import type { PiniaPluginContext } from "pinia";
import { StorageType } from "./utils/storage";
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
declare module "pinia" {
    interface DefineStoreOptionsBase<S extends StateTree, Store> {
        persist?: Partial<PersistType>;
    }
}
export declare const myPiniaStoragePlugin: (context: PiniaPluginContext) => void;
export * from "./utils/crypto";
export * from "./utils/storage";
