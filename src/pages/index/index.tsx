
import React, { useEffect } from 'react'

import { View, Text } from '@tarojs/components'

import { AtButton, AtNavBar, AtIcon  } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入

import './index.scss'


// eslint-disable-next-line import/first
import NavBar from '@/components/NavBar/index'

console.log(NavBar, 'NavBar');

// eslint-disable-next-line import/first
// import Tip from '@/utils/tip'

// console.log(Tip);



const Index: React.FC = () => { 

  useEffect( () => {
    // Tip.modal().then( res => {
    //     console.log(res);
    // })
  }, [])

  return (
    <View className='index'>
      <NavBar title='navbar' icon={<AtIcon value='chevron-left' size='20' color='#000'></AtIcon>} />

    </View>
  )

}

export default Index