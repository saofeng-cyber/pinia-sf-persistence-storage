import { PiniaPluginContext } from 'pinia';

type StorageType = "local" | "session";
interface UseStorageOptions {
    isEncrypto: boolean;
    storageType: StorageType;
}
/**
 *
 * @param options 配置
 * @param options.isDecrypto 是否加密
 * @returns any
 */
declare const useStorage: (options?: Partial<UseStorageOptions>) => {
    setItem: (key: string, data: any) => void;
    getItem: (key: string) => any;
    removeItem: (key: string) => void;
    clear: () => void;
};
declare const ss: {
    setItem: (key: string, data: any) => void;
    getItem: (key: string) => any;
    removeItem: (key: string) => void;
    clear: () => void;
};
declare const ls: {
    setItem: (key: string, data: any) => void;
    getItem: (key: string) => any;
    removeItem: (key: string) => void;
    clear: () => void;
};

declare const encypto: (data: any) => string;
declare const decrypto: (data: any) => any;

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
declare const myPiniaStoragePlugin: (context: PiniaPluginContext) => void;

export { StorageType, UseStorageOptions, decrypto, encypto, ls, myPiniaStoragePlugin, ss, useStorage };
