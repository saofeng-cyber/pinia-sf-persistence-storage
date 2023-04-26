import { defineStore } from "pinia";
import { AppState, get_app_setting, local_key } from "./help";
export const useAppStore = defineStore("app", {
  state: (): AppState => get_app_setting(),
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: {
    enable: true,
    key: local_key,
    storageType: "local",
    isEncrypto: false,
  },
});
