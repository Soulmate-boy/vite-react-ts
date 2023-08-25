
/**
 * 持久化-缓存获取
 * @param key 缓存持久化key
 * @returns store
 */
export const persistGetItem = (key: string) => {
    return (JSON.parse(localStorage.getItem(key) || '{}'))
}

/**
 * 持久化-缓存设置
 * @param key 缓存持久化key
 * @param state 缓存持久化数据 标准json字符串
 * @returns store
 */
export const persistSetItem = (key: string, state: string) => {
    return (localStorage.setItem(key, JSON.stringify(state)))
}