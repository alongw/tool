/// <reference types="node" />
type Config<T> = T;
/**
 * 初始化配置文件（设置配置文件路径）
 * @param {string} path - 配置文件路径
 * @param {BufferEncoding} encoding - 配置文件编码（可选，默认为 utf-8）
 * @param {string} data - 默认配置文件内容（可选，如果不传，则不会创建）
 * @returns {boolean} 如果为 true 则设置成功，如果为 false 则设置失败，创建新的配置文件
 *
 * @example
 * import { setConfig } from '@niajs/tool'
 * setConfig('./config.json' )
 */
declare const setConfig: <T>(path: string, encoding?: BufferEncoding, data?: string) => boolean;
/**
 * 获取配置文件，如果配置文件不存在，则返回 undefined
 * @returns {Config<T> | undefined} 配置文件
 */
declare const getConfig: <T>() => T;
export { setConfig, getConfig };
