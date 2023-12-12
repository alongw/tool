// 获取配置文件
import fs from 'fs-extra'

type Config<T> = T

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let configData: Config<any> | null = null

export const useConfig = () => {
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
    const setConfig = <T>(
        path: string,
        encoding: BufferEncoding = 'utf-8',
        data?: string
    ): boolean => {
        try {
            fs.readFileSync(path, {
                encoding: encoding
            })
        } catch (error) {
            if (data) {
                fs.outputFileSync(path, data, {
                    encoding: encoding
                })
            }
            return false
        }
        configData = fs.readFileSync(path, {
            encoding: encoding
        }) as T
        return true
    }

    /**
     * 获取配置文件，如果配置文件不存在，则返回 undefined
     * @returns {Config<T> | undefined} 配置文件
     */
    const getConfig = <T>(): Config<T> | undefined => {
        return configData
    }

    return {
        setConfig,
        getConfig
    }
}
