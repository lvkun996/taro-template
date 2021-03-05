import Taro from '@tarojs/taro'
import Tip from '../utils/tip'
import { errorKey, errorCode, BASEURL } from './config'

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


// 请求池
let urlPool: paramsType[] = [] 


// 是否挂起后续 请求重新登录的请求

let deferReuqest: boolean = false 

let relogin = () => {

    if (deferReuqest) {
        return null
    }

    deferReuqest = true

    return new Promise( async resolve => {
        Tip.loading()

        const res = await Taro.login()

        const { code } = res

        // 发送登录请求
        // const  data = await login({jsCode: code})

        // Taro.setStorageSync('userInfo', data)

        resolve(true)


    
        Tip.loaded()
    })  
}

// 请求
export const request = async (params: paramsType): Promise<any> => {
    const {baseUrl, url, method, data, header, timeout, responseType} = params
    
    return new Promise( async resolve => {
        const result = await Taro.request({
            url:  baseUrl ? baseUrl + url : BASEURL + url,
            method: method || 'GET',
            data,
            header: {
                'Content-Type': 'application/json',
                token: Taro.getStorageSync('userInfo').token,
                ...header
            },
            timeout,
            responseType
        });
        

        console.log(result);
        
        // eslint-disable-next-line no-shadow
        const { statusCode  } = result
        const { msg, data: Data } = result.data
        console.log(Data);
        
    


        
        if (result.data.code === 5001) {
            // token失效, 刷新token， 并重发请求
            urlPool.push(params)
            relogin()?.then( _ => {
                if (_) {
                    urlPool.forEach( async (item: paramsType) =>  resolve(await request(item)))
                }
            })

            return
          }

          errorHandle (statusCode, result.data[errorKey], msg, baseUrl + url)

          resolve(Data)
    }).catch( e => e)    
}