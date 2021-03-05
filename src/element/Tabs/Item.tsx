import React, { useEffect } from 'react'

import { View } from '@tarojs/components'

import './index.scss'

import TabsType from './data'





const Item: React.FC<TabsType.ItemProps> = (
    {
        children
    }
) => {
    return (
        <View style={{width: 750, height: 600}}>
           {
               children
           }
        </View>
    )
}

export default Item