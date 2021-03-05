
import {
    GetNodeInfo
} from './data'


import Taro from '@tarojs/taro'


/**
 * @description 获取节点信息
 * 
 */


 export type Return = {
    height: number    
 }


 export const getNodeInfo = ( name: string, type: 'selectAll' | 'select' ): Promise<Return[]> => {
     return new Promise( resolve => {
        const query = Taro.createSelectorQuery()
        query[type](name).boundingClientRect()
        
        query.exec(function(res){
            resolve(res)
        })
     }).catch(e => e) as Promise<Return[]>
    
 }