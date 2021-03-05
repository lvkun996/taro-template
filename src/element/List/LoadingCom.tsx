import React  from 'react'
import { View } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'

import DataD from './data'
import './index.scss'

const LoadingCom: React.FC<DataD.LoadingComProps> = ({
    content,
    color
}) => {
    return (
        <View className='LoadingCom'>
            <AtActivityIndicator
              color={color}
              content={content}
            />
        </View>
    )
}

export default LoadingCom