import { encypto, decrypto } from "./crypto";
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
const useStorage = (options?: Partial<UseStorageOptions>) => {
  const isEncrypto = options?.isEncrypto ?? false;
  const storageType = options?.storageType ?? "local";
  function setItem(key: string, data: any): void {
    isEncrypto
      ? window[`${storageType}Storage`].setItem(key, encypto(data))
      : window[`${storageType}Storage`].setItem(key, JSON.stringify(data));
  }

  function getItem(key: string): any {
    const data = window[`${storageType}Storage`].getItem(key);
    if (data) {
      return isEncrypto ? decrypto(data) : JSON.parse(data);
    }
    return null;
  }

  function removeItem(key: string) {
    window[`${storageType}Storage`].removeItem(key);
  }

  function clear() {
    window[`${storageType}Storage`].clear();
  }
  return {
    setItem,
    getItem,
    removeItem,
    clear,
  };
};

const ss = useStorage({});
const ls = useStorage({storageType: "session"});
export { useStorage, ss, ls };
