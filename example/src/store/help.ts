import { ss } from '@saofeng_cyber/pinia-sf-persistence-storage';

export const local_key = 'app_setting';
export interface AppState {
  count: number;
}
export const get_app_setting = (): AppState => {
  return ss.getItem('app_setting') || { count: 0 };
};
