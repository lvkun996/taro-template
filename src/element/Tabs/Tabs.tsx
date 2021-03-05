import React, { useEffect, useLayoutEffect, useState } from 'react'

import { View } from '@tarojs/components'

import { classnames } from '@/utils/common'

import './index.scss'

import TabsD from './data'

const styles = {
    transform: ''
}

const Tabs: React.FC<TabsD.TabsProps> = (
    {
        children,
        tabList,
        height
    }
) => {

    const [ curIndex, setCurIndex ] = useState<number>(0)

    useLayoutEffect( () => {
       
    })

    useEffect( () => {
        
    })

    useEffect( () => {
        console.log(tabList);
        
    }, [tabList])

    // 切换item
    const changeTabItem = (_index: number) => {
        setCurIndex(_index)
        styles.transform = `translateY(-${_index * 750}px)`
    }

    return (
        <View>
            <View className='lk-tabs-title'>
                {
                    tabList.map( (item, index) => (
                        <View 
                          key={index} 
                          className={classnames('lk-tabs-title-item', curIndex === index ? 'lk-tabs-title-active' : '')}
                          onClick={() => changeTabItem(index)}
                        >
                            {item.title}
                        </View>  
                    ))
                }
            </View>
            <View className='lk-tabs-content-item trs' style={{transform : `translateX(-${curIndex * 375}px)`}}>
                { children }
            </View>
            
        </View>
    )
}

export default Tabs