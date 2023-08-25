import { proxy, subscribe } from 'valtio'
import { persistSetItem, persistGetItem } from '@/store/config'
import _ from 'lodash';

import GlobalInfo from "@/store/modules/GlobalInfo";
import MenuInfo from "@/store/modules/MenuInfo"
import PermissionInfo from "@/store/modules/PermissionInfo";
import RouterInfo from "@/store/modules/RouterInfo";
import ThemeInfo from "@/store/modules/ThemeInfo";
import UserInfo from "@/store/modules/UserInfo";

const store = {
    GlobalInfo,
    MenuInfo,
    PermissionInfo,
    RouterInfo,
    ThemeInfo,
    UserInfo
}

/**
 * 全局状态管理名称
 */
export const persistName = 'state'

/**
 * 全局状态管理 state
 */
export const state = proxy(persistGetItem(persistName) || store)

/**
 * 全局状态管理重置
 */
export const storeReset = () => {
    const resetObj: any = _.cloneDeep(store);
    Object.keys(resetObj).forEach((key: string) => {
        state[key] = resetObj[key]
    })
}

/**
 * 订阅全局store持久化处理
 */
subscribe(state, () => {
    persistSetItem(persistName, state)
})