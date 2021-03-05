import React, { useLayoutEffect } from 'react'
import { View, ScrollView } from '@tarojs/components'

import DataD from "./data";

import './index.scss'

import LoadingCom from './LoadingCom'


const List: React.FC<DataD.ListProps> = ({
    children,
    height,
    itemheight = 0,
    openRefresher = true,
    refresherThreshold = 45,
    refresherState = false,
    offset = 50,
    loading = false,
    finished = false,
    onRefresher,
    onLoad
}) => {

    useLayoutEffect( () => {
        
        if (children.length === 0) execOnload()

        else if (  height && ( itemheight * children.length  < Number(height.split('px')[0])) ) execOnload()

    })

    // 下拉刷新
    const onRefresherRefresh = () =>  onRefresher && onRefresher()

    // 上拉刷新
    const onScrollToLower = () => !finished && execOnload()

    // 执行onlaod
    const execOnload = () => onLoad &&onLoad()

    const RenderLoadingCom = () => {
        if (finished) {
            return <LoadingCom color='transparent' content='没有更多了' /> 
        } else if ( loading ) {
            return <LoadingCom color='#6190E8' content='加载中...' /> 
        } else {
            return null
        }
    }

    return (
        <View>
            <ScrollView
              style={{height: height}}
              scrollY
              refresher-enabled={openRefresher}
              refresher-threshold={refresherThreshold}
              refresher-triggered={refresherState}
              onRefresherRefresh={onRefresherRefresh}
              onScrollToLower={onScrollToLower}
              lowerThreshold={offset}
            >
                { children }
                <RenderLoadingCom />
               
            </ScrollView>
        </View>
    )
}

export default List