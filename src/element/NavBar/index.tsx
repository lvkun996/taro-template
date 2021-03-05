import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro';
import './index.scss'

import { text }  from '../../api/test'

const NavBar: React.FC<NavBar.NavBarProps> = (
    {
        title,
        fontSize,
        color,
        icon,
        background
    }
    ) => {

    const [statusBarHeight, setStatusBarHeight] = useState<number>(0)

    const [boundingData, setboundingData ] = useState<Record<string, number>>({})

    // 获取navbar的高度
    const getNavBarHeight = (): void => {
        Taro.getSystemInfo({
            success: function (res) {
                setStatusBarHeight(res.statusBarHeight)
            }
        });
        const bounding = Taro.getMenuButtonBoundingClientRect()
        setboundingData(bounding as unknown as Record<string, number>)
    }

    useEffect( () => {
        getNavBarHeight()
        text().then( res => {
      
            
        })
    }, [])

    return (
        <view className='custom-navbar' style={{ background }}>
            <view className='empty' style={{height: statusBarHeight + 2 + 'px'}} />
            <view className='NavBar' style={{height:  (boundingData.top - statusBarHeight) * 2 + boundingData.height + 'px' }}>
               <text> { title } </text>
               <view className='icon'>
                    {icon}
               </view>
            </view>
        </view>
    )
}

export default NavBar