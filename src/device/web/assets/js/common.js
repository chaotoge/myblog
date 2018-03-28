/**
 * Created by @chaotoge on 2018/2/11.
 */

/**
 * @description 存储值到 或者更新 sessionStorage
 * @param {name} 名称 类型 ：String
 * @param {value} 值 类型：String
 */
export function setItem(name,value){
    window.sessionStorage.setItem(name,value);
}

/**
 * @description 获取 sessionStorage
 * @param name 名称 类型：string
 */

export function getItem(name) {
    return window.sessionStorage.getItem(name);
}

