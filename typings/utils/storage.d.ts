export type StorageType = "local" | "session";
export interface UseStorageOptions {
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
export { useStorage, ss, ls };
