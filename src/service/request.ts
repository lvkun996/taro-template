import Taro from '@tarojs/taro'
import Tip from '../utils/tip'
import { errorKey, errorCode } from './config'

type paramsType = {
    baseUrl?: string,
    url: string,
    method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT",
    data?: Record<string, any>,
    header?: Record<string, any>,
    timeout?: number,
    responseType?: "text" | "arraybuffer"
}

// 错误处理
const errorHandle = (statusCode: number, code: number,  message: string, url: string) => {
    console.log(code, 'code');
    
    if (statusCode !== 200) {
        Tip.toast('啊哦, 您的网络出了一点小问题')
    } else if (code === 500) {
        Tip.toast(message)
    } else if (code !== errorCode) {
        Tip.toast('网络开了小差，刷新一下试试')
        throw new Error(`${url}接口请求失败`)
    }
}

// 请求
export const request = async (params: paramsType) => {
    const {baseUrl, url, method, data, header, timeout, responseType} = params
    const result = await Taro.request({
        url: baseUrl + url,
        method: method || 'GET',
        data,
        header: {
            'Content-Type': 'application/json',
            ...header
        },
        timeout,
        responseType
    });
    
    // eslint-disable-next-line no-shadow
    const { statusCode  } = result
    const { message, data: Data } = result.data
    console.log(Data);
    
    errorHandle (statusCode, result.data[errorKey], message, baseUrl + url)

    return Data
    
}

 