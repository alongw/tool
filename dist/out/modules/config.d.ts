/// <reference types="node" />
type Config<T> = T;
declare const setConfig: <T>(path: string, encoding?: BufferEncoding) => boolean;
declare const getConfig: <T>() => T;
export { setConfig, getConfig };
