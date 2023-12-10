// 获取配置文件
import fs from 'fs-extra'

type Config<T> = T

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let configData: Config<any> | null = null

const setConfig = <T>(path: string, encoding: BufferEncoding = 'utf-8'): boolean => {
    try {
        fs.readFileSync(path, {
            encoding: encoding
        })
    } catch (error) {
        return false
    }
    configData = fs.readFileSync(path, {
        encoding: encoding
    }) as T
    return true
}

const getConfig = <T>(): Config<T> | undefined => {
    return configData
}

export { setConfig, getConfig }
